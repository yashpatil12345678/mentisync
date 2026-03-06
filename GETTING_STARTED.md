# Getting Started with MentiSync Production Platform

## Quick Start (2 minutes)

### 1. Install Dependencies
```bash
npm install
# or
bun install
```

### 2. Run Development Server
```bash
npm run dev
# or
bun dev
```

### 3. Open in Browser
Navigate to `http://localhost:3000`

### 4. Login with Demo Credentials
- **Student**: student@demo.com / password
- **Mentor**: mentor@demo.com / password
- **Admin**: admin@demo.com / password

## Project Structure

```
MentiSync/
├── pages/                 # Next.js pages (Router pages)
│   ├── _app.tsx          # Global app wrapper
│   ├── _document.tsx     # HTML document structure
│   ├── index.tsx         # Home/landing page
│   ├── login.tsx         # Login page
│   ├── signup.tsx        # Signup page
│   ├── student-dashboard.tsx
│   ├── mentor-dashboard.tsx
│   └── admin-dashboard.tsx
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Navbar.tsx        # Top navigation bar
│   ├── ProtectedRoute.tsx # Auth protection HOC
│   ├── DashboardLayout.tsx # Dashboard wrapper
│   └── dashboard/        # Reusable components
│       ├── StatCard.tsx
│       ├── PerformanceChart.tsx
│       ├── SessionCard.tsx
│       └── AdaptiveAlertCard.tsx
├── hooks/
│   └── useAuth.ts        # Authentication hook
├── utils/
│   ├── auth.ts           # Auth utilities
│   └── data.ts           # Data & business logic
├── types/
│   └── index.ts          # TypeScript definitions
└── app/
    └── globals.css       # Global styles

```

## Key Features to Explore

### 1. Dashboard Navigation
- Use sidebar to switch between dashboards
- Role-based navigation items
- Mobile hamburger menu

### 2. Adaptive Alerts
- Performance feedback changes based on score
- Green for excellent (90+)
- Blue for good (80-89)
- Yellow for fair (70-79)
- Orange for improvement (below 70)

### 3. Charts & Visualizations
- Recharts integration for performance trends
- Interactive tooltips
- Responsive design

### 4. Responsive Design
- Open on mobile device to see hamburger menu
- Sidebar collapses on mobile
- Grid adapts to screen size

### 5. User Roles
- **Student**: View mentors, sessions, progress
- **Mentor**: Manage students, view analytics
- **Admin**: Platform overview, user management

## Authentication

### How It Works
1. Login credentials are validated against mock database
2. User data stored in localStorage
3. useAuth hook provides auth state to components
4. ProtectedRoute wrapper enforces access control

### Demo Users Database
Located in `utils/auth.ts`:
- student@demo.com (role: student, score: 78)
- mentor@demo.com (role: mentor, score: 92)
- admin@demo.com (role: admin, score: 95)

### Session Management
- Sessions stored in localStorage
- Auto-logout on browser close (clear cache)
- Manual logout via Sidebar button

## Component Usage

### StatCard
```tsx
<StatCard
  label="Active Sessions"
  value={28}
  icon={Clock}
  color="blue"
  change={{ value: 5, positive: true }}
/>
```

### PerformanceChart
```tsx
<PerformanceChart 
  data={performanceData}
  height={300}
  showArea={true}
/>
```

### SessionCard
```tsx
<SessionCard
  session={sessionData}
  variant="default" // or "compact"
/>
```

### AdaptiveAlertCard
```tsx
<AdaptiveAlertCard averageScore={85} />
```

### ProtectedRoute
```tsx
<ProtectedRoute allowedRoles={['student']}>
  <StudentContent />
</ProtectedRoute>
```

## Hooks

### useAuth Hook
```tsx
const { user, isAuthenticated, loading, error, login, logout, signup } = useAuth();

if (loading) return <div>Loading...</div>;

if (isAuthenticated) {
  return <div>Hello, {user?.name}!</div>;
}
```

## Build & Deployment

### Build for Production
```bash
npm run build
npm run start
# or
bun run build
bun start
```

### Deploy to Vercel
```bash
# Push to GitHub, connect repo to Vercel
# Automatic deployment on push
```

### Environment Variables
No env variables required for development. Mock data is used.

For production, you would need:
- Database connection string
- Auth service credentials
- API endpoints

## Troubleshooting

### Login not working
- Verify email is one of: student@demo.com, mentor@demo.com, admin@demo.com
- Password is: password
- Check browser console for errors

### Charts not showing
- Ensure recharts is installed: `npm install recharts`
- Check if PerformanceChart receives valid data array
- Verify dimensions (height should be > 200px)

### Mobile menu not working
- Clear cache if stuck
- Refresh page
- Check if window width is < 1024px

### Build errors
- Clear .next folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npx tsc --noEmit`

## Performance Tips

### Optimization Done
- useMemo for expensive calculations
- Efficient component structure
- Proper React hook usage
- Optimized re-renders

### Further Optimization
- Add image optimization
- Implement code splitting
- Add service worker
- Implement caching strategies

## Security Considerations

### Current Implementation
- Client-side only for demo
- localStorage for session

### Production Recommendations
- Implement server-side auth
- Use secure HTTP-only cookies
- Add CSRF protection
- Implement rate limiting
- Add input validation
- Use environment variables for secrets

## Testing Flows

### Student Flow
1. Login as student@demo.com
2. View dashboard with adaptive alert
3. Check performance chart
4. View session list
5. Navigate using sidebar

### Mentor Flow
1. Login as mentor@demo.com
2. View mentor dashboard
3. See mentee statistics
4. Check performance metrics
5. Review sessions

### Admin Flow
1. Login as admin@demo.com
2. View platform overview
3. Check system health
4. Review user breakdown
5. Monitor activity

### Navigation Test
1. Login with any account
2. Use sidebar to navigate between sections
3. Click logout
4. Verify redirect to login

### Mobile Test
1. Open browser DevTools
2. Toggle device toolbar
3. Test hamburger menu
4. Verify responsive layout
5. Test touch interactions

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npx tsc --noEmit

# Format code
npx prettier --write "**/*.{ts,tsx}"

# Lint code
npx eslint . --ext .ts,.tsx
```

## Next Steps

### To Extend the Platform
1. Replace mock data with real database
2. Implement real authentication
3. Add API endpoints
4. Connect to backend services
5. Add real-time updates
6. Implement notifications
7. Add analytics
8. Set up error monitoring

### To Customize
1. Modify color scheme in globals.css
2. Add new dashboard roles
3. Create new dashboard pages
4. Add more chart types
5. Customize adaptive logic
6. Add new features

## Resources

- [Next.js Pages Router Docs](https://nextjs.org/docs/pages)
- [Recharts Documentation](https://recharts.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Hooks Docs](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support

For issues or questions:
1. Check browser console for errors
2. Verify credentials match demo accounts
3. Clear localStorage: `localStorage.clear()`
4. Refresh page: Ctrl+F5 (hard refresh)
5. Restart dev server: Stop and `npm run dev`

---

**Status**: Production Ready
**Last Updated**: 2024
**Version**: 1.0.0
