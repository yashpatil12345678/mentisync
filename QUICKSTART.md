# MentiSync Dashboard - Quick Start Guide

## 🚀 Get Running in 60 Seconds

### Step 1: Install Dependencies
```bash
npm install
# or
bun install
```

### Step 2: Start Development Server
```bash
npm run dev
# or
bun run dev
```

### Step 3: Open Browser
Go to `http://localhost:3000`

## 🔐 Demo Accounts

Use these to test the application:

### Student Account
- **Email**: `student@demo.com`
- **Password**: `password`

### Mentor Account
- **Email**: `mentor@demo.com`
- **Password**: `password`

### Admin Account
- **Email**: `admin@demo.com`
- **Password**: `password`

## 🎯 What to Try

1. **Home Page** - Browse features and landing page
2. **Sign Up** - Create a new account with your info
3. **Student Dashboard** - View mentors and progress
4. **Mentor Dashboard** - Manage mentees
5. **Admin Dashboard** - Monitor system
6. **Mobile View** - Resize browser to test responsive design
7. **Sidebar** - Click menu items to navigate
8. **Logout** - Click logout button in sidebar

## 📱 Mobile Testing

Resize your browser window:
- **Desktop**: `1024px+` - Full sidebar visible
- **Tablet**: `768px - 1024px` - Responsive layout
- **Mobile**: `< 768px` - Hamburger menu appears

Or use DevTools device emulation (F12):
- iPhone 12, 13, 14, etc.
- iPad
- Samsung Galaxy

## 🛠️ Project Structure

```
pages/
├── index.tsx                 Home page
├── login.tsx                 Login page
├── signup.tsx                Signup page
├── student-dashboard.tsx     Student dashboard
├── mentor-dashboard.tsx      Mentor dashboard
├── admin-dashboard.tsx       Admin dashboard
├── _app.tsx                  App wrapper
└── _document.tsx             HTML structure

components/
├── Sidebar.tsx               Navigation sidebar
└── Navbar.tsx                Top navbar
```

## 🔧 Build & Deploy

### Local Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push code to GitHub
2. Import repository to Vercel
3. Click Deploy
4. Done! 🎉

## 🐛 Troubleshooting

### Page Not Loading?
- Make sure dev server is running
- Check browser console for errors
- Try clearing browser cache

### Navigation Not Working?
- Try refreshing the page
- Check browser console
- Verify localStorage is enabled

### Build Errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Full Documentation

- **[README.md](./README.md)** - Complete documentation
- **[TESTING.md](./TESTING.md)** - Testing guide
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Project overview
- **[COMPLETION_CHECKLIST.md](./COMPLETION_CHECKLIST.md)** - Requirements checklist

## 🎓 Learning Path

### First Time
1. Visit home page
2. Click "Get Started"
3. Sign up as a student
4. Explore student dashboard

### Next
1. Logout
2. Login as mentor
3. Check mentor features

### Advanced
1. Login as admin
2. View system monitoring
3. Check user management

## 🌟 Key Features

- ✅ Pages Router (not App Router)
- ✅ Three role-based dashboards
- ✅ Mobile responsive
- ✅ Modern UI with Tailwind CSS
- ✅ Dark mode support
- ✅ Form validation
- ✅ Session management
- ✅ Clean code structure

## 💡 Tips

- **Use Demo Data** - Pre-filled content for testing
- **Check Sidebar** - Navigation changes based on role
- **Test Mobile** - Hamburger menu on small screens
- **Explore Stats** - Interactive cards with data
- **Try Buttons** - Most buttons are clickable
- **Read Comments** - Code has helpful inline comments

## 🚨 Common Issues

### "Cannot find module"
```bash
npm install
```

### "Port 3000 in use"
```bash
npm run dev -- -p 3001
```

### "Styles not loading"
- Clear browser cache
- Refresh page (Ctrl+Shift+R)

### "Session lost after reload"
- This is normal (localStorage session)
- Login again to continue

## 🎉 You're Ready!

Start the server and explore MentiSync:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and enjoy! 🚀

---

**Need Help?**
- Check README.md for detailed docs
- See TESTING.md for testing info
- Review code comments
- Check browser console for errors

**Ready to Deploy?**
- See [Vercel Deployment Guide](./README.md#deployment-on-vercel)
- Or check PROJECT_SUMMARY.md

---

**Happy Coding! 💻**
