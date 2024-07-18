This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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


## Project Documentation

# Overview
This project is a web application featuring user authentication. It includes sign-up and sign-in capabilities, protected routes, and a dedicated landing page for authenticated users.

## Key Components

# SignIn Component
This component manages user authentication. It presents a form for users to input their email and password. Upon form submission, it checks the credentials against locally stored user data. If authentication is successful, it sets an authentication cookie and redirects the user to the Home page. The component uses React Hooks for state management, Next.js Router for navigation, and Framer Motion for animations.


## AuthValidation Higher Order Component (HOC)
This is a crucial security component that protects routes from unauthorized access. It wraps around components that should only be accessible to authenticated users. The HOC checks the user's authentication status and redirects unauthenticated users to the SignIn page.

## Home Component
This serves as the main page for authenticated users. It's protected by the AuthValidation HOC, ensuring only logged-in users can access it. The Home component renders the LandingPage component.

## LandingPage Component
This component displays content intended for authenticated users. It's rendered within the protected Home component, though specific details of its implementation were not provided.

## Authentication Process
The authentication flow begins when a user enters their credentials on the SignIn page. If the credentials are valid, the system stores the authentication status in a cookie and updates the user's logged-in status in localStorage. The user is then redirected to the Home page. For protected routes, the AuthValidation HOC checks for authentication, redirecting unauthenticated users to the SignIn page.

## Data Storage
The application currently stores user credentials in localStorage, which is not recommended for production environments due to security concerns. Authentication status is maintained using cookies.

## User Interface and Styling
The project utilizes Tailwind CSS for styling, providing a modern and responsive design. Framer Motion is employed in the SignIn component to add smooth animations, enhancing the user experience.
 
## Potential Improvements

Implement server-side authentication for enhanced security.
Adopt more secure storage methods for sensitive data instead of localStorage.
Incorporate error handling and user feedback for failed login attempts.
Develop logout functionality.
Implement password hashing and salting for improved security.
Consider adding form validation for better user experience.
Implement password reset functionality.
Add user profile management features.

This documentation provides an overview of the project's current state and structure.