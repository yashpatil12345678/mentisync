# MentiSync Dashboard - Pages Router

A complete mentorship management platform built with Next.js Pages Router, featuring student, mentor, and admin dashboards.

## Project Structure

### Pages Router Files
```
pages/
├── _app.tsx              # Next.js app wrapper (entry point)
├── _document.tsx         # HTML structure
├── index.tsx             # Home/landing page
├── login.tsx             # User login page
├── signup.tsx            # User registration page
├── student-dashboard.tsx # Student dashboard
├── mentor-dashboard.tsx  # Mentor dashboard
└── admin-dashboard.tsx   # Admin dashboard
```

### Components
```
components/
├── Sidebar.tsx           # Navigation sidebar
├── Navbar.tsx            # Top navigation bar
└── theme-provider.tsx    # Theme configuration
```

## Features

### 1. Authentication
- **Demo Accounts**:
  - Student: `student@demo.com` / `password`
  - Mentor: `mentor@demo.com` / `password`
  - Admin: `admin@demo.com` / `password`
- Login and signup pages with form validation
- Session management via localStorage
- Role-based access control

### 2. Student Dashboard
- Active mentors list
- Session tracking (12 sessions this month)
- Progress monitoring (68% on track)
- Achievements display (5 unlocked)
- Upcoming sessions with join buttons
- Learning goals with progress bars
- Quick action buttons

### 3. Mentor Dashboard
- Active mentees management
- Session statistics
- Average rating (4.8/5.0)
- Mentee progress tracking
- Upcoming sessions
- Action items and alerts
- Quick communication tools

### 4. Admin Dashboard
- Total users overview (2,847)
- System activity monitoring
- Platform health metrics (99.8% uptime)
- User management and status
- Quick metrics and statistics
- System alerts and warnings
- Admin action controls

## Technology Stack

- **Framework**: Next.js 16.1.6 (Pages Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4.2.0
- **Icons**: Lucide React
- **Components**: shadcn/ui
- **Type Safety**: TypeScript 5.7.3

## Key Requirements Met

✅ Pages Router structure (NOT App Router)
✅ No Server Components
✅ No `dynamic = "force-dynamic"`
✅ No experimental features
✅ Standard React hooks (useState, useEffect)
✅ next/router for navigation
✅ Working navigation buttons
✅ Sidebar navigation switching between dashboards
✅ Responsive mobile design
✅ Modern, clean UI design

## Getting Started

### Installation

1. **Using shadcn CLI** (Recommended):
```bash
npx shadcn-cli@latest init my-app
cd my-app
npx shadcn-cli@latest add --all
```

2. **Or download the ZIP**:
- Click the Version Box in v0
- Download ZIP
- Extract and run: `npm install`

### Development

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
# or
bun run build
bun start
```

## Navigation Flow

1. **Home Page** (`/`) - Landing page with feature overview
   - Auto-redirects logged-in users to their dashboard
   - Sign in / Sign up links

2. **Login** (`/login`) - Authentication
   - Demo credentials provided
   - Role selection
   - Persistent session

3. **Student Dashboard** (`/student-dashboard`)
   - Sidebar: Dashboard, My Mentors, Progress
   - View active mentors and sessions
   - Track learning goals

4. **Mentor Dashboard** (`/mentor-dashboard`)
   - Sidebar: Dashboard, My Students, Analytics
   - Manage mentees
   - Track progress and ratings

5. **Admin Dashboard** (`/admin-dashboard`)
   - Sidebar: Dashboard, Users, Analytics
   - System monitoring
   - User management
   - Platform health

## Sidebar Navigation

The sidebar automatically updates based on user role:
- **Student**: Shows student-specific navigation
- **Mentor**: Shows mentor-specific navigation
- **Admin**: Shows admin-specific navigation

Mobile users get a hamburger menu that slides in from the left.

## Styling System

Using shadcn/ui theme variables:
- **Primary Color**: `--primary`
- **Background**: `--background`
- **Foreground**: `--foreground`
- **Muted**: `--muted` / `--muted-foreground`
- **Border**: `--border`
- **Sidebar**: `--sidebar` / `--sidebar-foreground`

All colors are defined in `app/globals.css` with support for light/dark modes.

## Component Architecture

### Pages are self-contained with:
- Authentication checks via useEffect
- Role-based access control
- Sidebar + Navbar layout
- Responsive grid layouts
- Client-side rendering (no SSR)

### Reusable Components:
- **Sidebar**: Role-aware navigation, logout functionality
- **Navbar**: User info, notifications, settings
- **Cards**: Consistent styling for stats and content

## Deployment on Vercel

1. **Connect GitHub repository** or upload the code
2. **Environment variables**: None required for demo
3. **Build command**: `npm run build` (automatic)
4. **Deploy**: Click Deploy

The project uses Pages Router which is fully supported on Vercel production.

## Demo Features

### Pre-populated Data:
- Sample mentors, mentees, sessions
- Mock statistics and metrics
- Demo alerts and activities

### Interactive Elements:
- All navigation works properly
- Sidebar switches between dashboards
- Buttons have hover states
- Form validation on login/signup
- Modal-like dialogs for actions

## Troubleshooting

### Build Errors:
- Ensure no files in `app/` directory (except globals.css)
- Pages must be in `pages/` directory
- Components in `components/` directory
- Run `npm install` if dependencies missing

### Runtime Errors:
- Check localStorage for session data
- Ensure proper useEffect cleanup
- Verify role is set before rendering dashboard

### Navigation Issues:
- Clear browser cache and localStorage
- Verify route names match exactly
- Check console for 404 errors

## Performance Optimizations

- Static assets in `/public`
- Optimized images with `next/image`
- CSS modules and Tailwind for styling
- Lazy loading of components
- Efficient re-renders with React hooks

## License

MIT

## Support

For issues or questions, check the documentation or create an issue in the repository.
