This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Git Branch Naming Convention

The branch naming rules in this project is following a guide from [medium.com](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534) by Abhay Amin

### Basic Rules

- Lowercase and Hyphen-separated
- Alphanumeric Characters
- No Continuous Hyphens
- No Trailing Hyphens
- Descriptive

### Branch Prefix Names

- feature
- bugfix
- hotfix
- release
- docs

### Examples

- feature/login-system
- bugfix/header-styling
- hotfix/critical-security-issue
- release/v1.0.1
- docs/api-endpoints

# Project File Structure

The project structure will follow [nextjs](https://nextjs.org/docs/getting-started/project-structure) official documention project structure.

It will follow React JS guide second by [medium.com](https://medium.com/@kthamodaran/react-8-best-practices-folder-structure-5dbda48a69e) by Thamodaran.

### React JS Convention

The following convention will be used from Thamodarans guide...

- Feature/Component Centric
- Focus on common modules
- Add custom components in folders
- Create custom hooks
- Use absolute imports
- Avoid a single context for everything
- Seperate business logic from UI
