import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/homepage/homepage';
import DashboardPage from './pages/dashboardPage/DashboardPage'
import ChatPage from './pages/chatPage/ChatPage';
import NavLayout from './layouts/navlayout/Navlayout';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout';
import SignInPage from './pages/signInPage/signInPage';
import SignUpPage from './pages/signUpPage/signUpPage';
// import { ClerkProvider } from '@clerk/clerk-react';

// Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: '/sign-in/*',
        element: <SignInPage />
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
     <RouterProvider router={router} />
    {/* </ClerkProvider> */}
  </StrictMode>,
)
