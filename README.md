# Youjiu Trading - Local Development Setup

## Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn

## Local Installation Guide

### 1. Clone the repository
```bash
git clone https://github.com/alidjie/youjiu-trading.git
cd youjiu-trading
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setting up Tailwind CSS locally
Tailwind CSS is already configured in the project, but if you need to reinstall or update:

```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind configuration (if needed)
npx tailwindcss init -p
```

### 4. Running the development server
```bash
npm run dev
```

### 5. Building for production
```bash
npm run build
```

### 6. Previewing the production build
```bash
npm run preview
```

## Deploying to Vercel
After setting up locally and making changes:

1. Commit your changes:
```bash
git add .
git commit -m "Fix Tailwind configuration"
git push origin main
```

2. Vercel will automatically detect the changes and deploy the updated version.

## Troubleshooting
If you still encounter Tailwind CSS issues:

1. Check if Tailwind is properly installed:
```bash
npm list tailwindcss
```

2. Verify your Tailwind configuration in `tailwind.config.js`

3. Clear npm cache and reinstall dependencies:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```