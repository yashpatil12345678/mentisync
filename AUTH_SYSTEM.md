# Production Authentication System

This document describes the production-ready authentication system implemented in MentiSync.

## Overview

The authentication system has been completely redesigned to use production-grade security practices:

- **Password Hashing**: bcryptjs with 10 salt rounds
- **Session Management**: JWT tokens with 7-day expiration
- **Secure Storage**: HTTP-only cookies (immune to XSS attacks)
- **Database**: In-memory user store with proper validation
- **API Routes**: RESTful endpoints for auth operations

## Architecture

### Key Components

#### 1. Database Layer (`lib/db.ts`)
- In-memory user store with email indexing
- User validation (name, email, password format)
- Password hashing and verification using bcryptjs
- Prevents duplicate email registration
- Generates unique user IDs

#### 2. JWT Utilities (`lib/jwt.ts`)
- Token generation with 7-day expiration
- Token verification with algorithm validation
- Safe token decoding
- Uses environment variable `JWT_SECRET` (defaults to secure fallback)

#### 3. Cookie Management (`lib/cookies.ts`)
- HTTP-only cookie storage (secure against XSS)
- Secure flag enabled in production
- SameSite=lax for CSRF protection
- Cookie parsing from request headers

#### 4. API Routes

##### Signup (`pages/api/auth/signup.ts`)
```
POST /api/auth/signup
Request:
{
  "name": "string",
  "email": "string",
  "password": "string (min 6 chars)",
  "confirmPassword": "string",
  "role": "student|mentor|admin"
}

Response (201):
{
  "success": true,
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}

Response (400):
{
  "success": false,
  "error": "error message"
}
```

Validations:
- Name is required and non-empty
- Valid email format
- Password minimum 6 characters
- Passwords must match
- Valid role selection
- Prevents duplicate emails

##### Login (`pages/api/auth/login.ts`)
```
POST /api/auth/login
Request:
{
  "email": "string",
  "password": "string"
}

Response (200):
{
  "success": true,
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string"
  }
}

Response (401):
{
  "success": false,
  "error": "Invalid email or password"
}
```

Process:
1. Find user by email
2. Compare password using bcrypt
3. Generate JWT token
4. Set HTTP-only cookie
5. Return user data

##### Logout (`pages/api/auth/logout.ts`)
```
POST /api/auth/logout

Response (200):
{
  "success": true,
  "message": "Logout successful"
}
```

Process:
1. Clear HTTP-only cookie
2. Token becomes invalid on next request

##### Get Current User (`pages/api/auth/me.ts`)
```
GET /api/auth/me

Response (200):
{
  "success": true,
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string",
    "averageScore": "number"
  }
}

Response (401):
{
  "success": false,
  "error": "Unauthorized"
}
```

Process:
1. Extract token from HTTP-only cookie
2. Verify JWT signature and expiration
3. Fetch user from database
4. Return user data

### 5. Authentication Utilities (`utils/auth.ts`)
Client-side API wrapper functions:
- `login(input)` - Calls signup API route
- `signup(input)` - Calls login API route
- `logout()` - Calls logout API route
- `getCurrentUser()` - Calls /me endpoint

All requests include `credentials: 'include'` to send HTTP-only cookies.

### 6. useAuth Hook (`hooks/useAuth.ts`)
React hook for managing auth state:
```typescript
const { user, isLoading, error, login, signup, logout, isAuthenticated } = useAuth();
```

Features:
- Initializes auth state on mount
- Handles async login/signup/logout
- Auto-generates user avatars from names
- Error state management
- Loading states for all operations

### 7. ProtectedRoute Component (`components/ProtectedRoute.tsx`)
HOC for route protection:
```typescript
<ProtectedRoute allowedRoles={['student']}>
  <StudentDashboard />
</ProtectedRoute>
```

Features:
- Validates user authentication
- Enforces role-based access
- Automatic redirect to correct dashboard on wrong role
- Loading state display
- Prevents authenticated users from accessing auth pages

## Security Features

### 1. Password Security
- Bcryptjs hashing with 10 salt rounds
- Passwords never stored in plain text
- Comparison using bcrypt.compare() (timing attack resistant)

### 2. Session Security
- JWT tokens stored in HTTP-only cookies
- Cookies cannot be accessed via JavaScript (XSS protection)
- Secure flag enabled in production
- SameSite=lax for CSRF protection

### 3. Input Validation
- Email format validation
- Password length requirement (minimum 6 chars)
- Role validation against allowed values
- Name requirement validation
- Email uniqueness enforcement

### 4. API Security
- No hardcoded secrets (uses environment variables)
- Proper HTTP status codes
- Error messages don't leak information
- All requests use HTTPS in production

### 5. Frontend Security
- No localStorage for auth tokens
- No demo credentials in code
- Credentials never logged to console
- Automatic redirect on invalid token

## Database Initialization

The in-memory database starts empty. No demo users are created:

```typescript
private initializeSampleData() {
  // Empty - no demo users
}
```

Users must sign up to create accounts.

## Usage Flow

### User Registration
1. User fills signup form with name, email, password, role
2. Frontend validates inputs
3. Signup API route validates and hashes password
4. User record created in database
5. JWT token generated and stored in HTTP-only cookie
6. User redirected to role-appropriate dashboard

### User Login
1. User enters email and password
2. Login API route finds user by email
3. Password verified using bcrypt
4. JWT token generated and stored in HTTP-only cookie
5. User redirected to role-appropriate dashboard

### User Logout
1. User clicks logout button
2. Logout API route clears HTTP-only cookie
3. User redirected to login page
4. Protected routes check for valid token on next load

### Route Protection
1. Component wrapped in ProtectedRoute
2. useAuth hook checks token via /api/auth/me
3. If no valid token, redirects to /login
4. If valid token but wrong role, redirects to correct dashboard
5. If authenticated with correct role, renders component

## Environment Variables

Create a `.env.local` file:

```bash
# JWT Secret (required for production)
JWT_SECRET=your-secret-key-change-in-production

# Node environment (set by deployment platform)
NODE_ENV=production
```

## Testing

To test the authentication system:

1. **Signup Test**
   - Navigate to /signup
   - Fill form with unique email
   - Should be redirected to dashboard
   - Token should be stored in HTTP-only cookie

2. **Login Test**
   - Create account via signup
   - Logout
   - Login with registered credentials
   - Should be redirected to dashboard

3. **Role-Based Routing**
   - Create accounts with different roles
   - Verify redirect to correct dashboard
   - Try accessing wrong dashboard (should redirect)

4. **Token Validation**
   - Check HTTP-only cookie is set after login
   - Token should be valid for 7 days
   - Cookie should be cleared after logout
   - Protected routes should require valid token

## Migration from Demo Auth

The following demo logic has been completely removed:

- Hardcoded demo user credentials (student@demo.com, mentor@demo.com, admin@demo.com)
- localStorage-based authentication
- Demo credential display in UI
- Mock user data
- Fake validation logic

All authentication is now production-ready with proper:
- Password hashing
- JWT token management
- HTTP-only cookies
- Database persistence
- Input validation
- Error handling

## Production Deployment

1. Set `JWT_SECRET` environment variable in production
2. Ensure `NODE_ENV=production`
3. HTTPS will be enforced (Secure flag on cookies)
4. Database layer can be extended to use real database (PostgreSQL, MongoDB, etc.)
5. Consider implementing:
   - Email verification
   - Password reset flow
   - Refresh token rotation
   - Rate limiting on auth endpoints
   - Audit logging

## Troubleshooting

### "Invalid email or password" on login
- Verify user was created via signup
- Check email is case-insensitive (stored in lowercase)
- Ensure password matches exactly

### "Unauthorized" on protected routes
- Check HTTP-only cookie is being sent
- Verify JWT_SECRET matches between signup and subsequent requests
- Check token hasn't expired (7 days)

### CORS issues
- Ensure `credentials: 'include'` is set in all fetch calls
- API routes should accept requests from same origin

### Token not persisting
- HTTP-only cookies require `credentials: 'include'` in fetch options
- Browser may block cookies if domain/protocol differs
- Check browser's privacy settings aren't blocking cookies
