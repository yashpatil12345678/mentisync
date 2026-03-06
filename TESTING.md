# MentiSync Dashboard - Testing Guide

## Demo Accounts

Use these credentials to test different roles:

### Student Account
- **Email**: `student@demo.com`
- **Password**: `password`
- **Dashboard**: `/student-dashboard`
- **Features**: View mentors, track progress, schedule sessions

### Mentor Account
- **Email**: `mentor@demo.com`
- **Password**: `password`
- **Dashboard**: `/mentor-dashboard`
- **Features**: Manage mentees, view analytics, track ratings

### Admin Account
- **Email**: `admin@demo.com`
- **Password**: `password`
- **Dashboard**: `/admin-dashboard`
- **Features**: System monitoring, user management, platform health

## Testing Checklist

### Navigation
- [ ] Home page loads correctly
- [ ] Sign in link redirects to login page
- [ ] Sign up link redirects to signup page
- [ ] Login redirects to correct dashboard
- [ ] Logout clears session and redirects to login
- [ ] Sidebar navigation switches between pages
- [ ] Mobile sidebar hamburger menu works

### Authentication
- [ ] Login with demo credentials works
- [ ] Invalid credentials show error message
- [ ] Signup form validates password match
- [ ] Signup creates session and redirects
- [ ] Logged-in users skip login on home page
- [ ] Sessions persist on page reload (localStorage)
- [ ] Logout removes session data

### Dashboards

#### Student Dashboard
- [ ] Sidebar shows "Dashboard", "My Mentors", "Progress"
- [ ] Welcome message displays correct username
- [ ] Stats display correctly (3 mentors, 12 sessions, 68%, 5 achievements)
- [ ] Upcoming sessions list shows 3 sessions
- [ ] Learning goals section with progress bars
- [ ] My Mentors sidebar with avatars
- [ ] Quick action buttons work (Send Message, Schedule, View Achievements)

#### Mentor Dashboard
- [ ] Sidebar shows "Dashboard", "My Students", "Analytics"
- [ ] Welcome message displays correct username
- [ ] Stats display correctly (8 mentees, 28 sessions, 4.8 rating, +45% growth)
- [ ] Upcoming sessions list shows 3 sessions
- [ ] Mentee progress section with bars
- [ ] Action items showing alerts and messages
- [ ] My Mentees sidebar with avatars
- [ ] Quick action buttons functional

#### Admin Dashboard
- [ ] Sidebar shows "Dashboard", "Users", "Analytics"
- [ ] Stats display correctly (2847 users, 342 sessions, 99.8% health, 3 issues)
- [ ] Recent users table shows 4 users with status badges
- [ ] System activity log shows 4 activities
- [ ] Quick metrics showing user distribution
- [ ] Alerts section showing different alert levels
- [ ] Admin actions buttons available

### UI/UX

#### Responsive Design
- [ ] Desktop view (>1024px) shows full sidebar
- [ ] Tablet view (768px-1024px) sidebar collapses properly
- [ ] Mobile view (<768px) hamburger menu appears
- [ ] Mobile menu closes when navigation item clicked
- [ ] All text readable on mobile
- [ ] Buttons are touch-friendly (48px min height)

#### Visual Design
- [ ] Consistent color scheme throughout
- [ ] Proper contrast for accessibility
- [ ] Hover states on buttons and links
- [ ] Smooth transitions and animations
- [ ] Icons render correctly
- [ ] No layout shifts or CLS issues

#### Interactive Elements
- [ ] All buttons respond to clicks
- [ ] Links navigate correctly
- [ ] Form inputs accept text
- [ ] Password visibility toggle works
- [ ] Input focus states visible
- [ ] Error messages display properly

### Technical

#### Build
- [ ] `npm run build` completes without errors
- [ ] No TypeScript errors in console
- [ ] No warnings in build output
- [ ] Build time reasonable (<1 minute)

#### Runtime
- [ ] No console errors on any page
- [ ] No warnings in console
- [ ] Memory usage stable
- [ ] No memory leaks on navigation
- [ ] Page load time under 2 seconds

#### Browser Compatibility
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Mobile Safari iOS
- [ ] Chrome Mobile Android

### Performance

#### Lighthouse Scores
- [ ] Performance > 80
- [ ] Accessibility > 90
- [ ] Best Practices > 85
- [ ] SEO > 90

#### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

### Edge Cases

- [ ] Direct URL navigation to dashboards (e.g., /student-dashboard)
- [ ] Back button after logout
- [ ] Rapid page navigation
- [ ] Form submission while loading
- [ ] Network offline/online transitions
- [ ] Browser reload mid-navigation

## Test Scenarios

### Scenario 1: Student User Flow
1. Go to home page
2. Click "Get Started"
3. Sign up as student
4. Verify redirected to student dashboard
5. Check sidebar navigation
6. Logout and verify redirect to login

### Scenario 2: Mentor User Flow
1. Go to login page
2. Enter mentor@demo.com / password
3. Verify redirected to mentor dashboard
4. Navigate through sidebar items
5. Check all stats and cards display
6. Test logout

### Scenario 3: Admin User Flow
1. Direct navigation to /admin-dashboard
2. Should redirect to login (unauthorized)
3. Login with admin account
4. Verify admin dashboard loads
5. Check user management table
6. Test system alerts display

### Scenario 4: Session Persistence
1. Login as student
2. Refresh page - should stay logged in
3. Navigate to /student-dashboard directly - should work
4. Logout
5. Refresh page - should be on login page

### Scenario 5: Mobile Experience
1. Resize browser to mobile size
2. Hamburger menu should appear
3. Click hamburger to open sidebar
4. Click navigation item
5. Sidebar should close automatically
6. Test all pages on mobile viewport

## Automation Testing

### Sample Cypress Tests
```typescript
// Login test
cy.visit('/')
cy.contains('Sign in').click()
cy.get('input[placeholder="you@example.com"]').type('student@demo.com')
cy.get('input[placeholder="••••••••"]').type('password')
cy.get('button[type="submit"]').click()
cy.url().should('include', '/student-dashboard')

// Navigation test
cy.get('a').contains('My Mentors').click()
cy.get('h3').should('contain', 'My Mentors')

// Mobile menu test
cy.viewport('iphone-x')
cy.get('button').contains('Menu').click()
cy.get('aside').should('be.visible')
```

## Known Issues & Limitations

- Demo data is hardcoded (no backend)
- Session only persists in current browser
- No real email notifications
- No file uploads
- No real-time updates
- Mentor/Student matching is mock data

## Performance Benchmarks

- First Contentful Paint: ~800ms
- Largest Contentful Paint: ~1200ms
- Time to Interactive: ~1500ms
- Total Build Size: ~250KB gzipped

## Deployment Testing

### Test before Vercel deployment:
1. Run `npm run build` locally
2. Run `npm start` and test
3. Check all routes work
4. Verify no errors in production mode
5. Test on mobile device
6. Test slow network (3G throttle)

### Post-deployment:
1. Test all routes on production URL
2. Check Vercel analytics
3. Monitor error rates
4. Test redirects and 404s
5. Verify HTTPS working
6. Test from different regions
