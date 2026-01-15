import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation } from "framer-motion";
import Layout from "./components/Layout/Layout";
import SmoothScroll from "./components/SmoothScroll";

// Lazy load the Home component (and others in the future)
// This breaks the dependency chain by creating a separate network request for this chunk
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/otherpages/About/About"));
const Blog = lazy(() => import("./pages/otherpages/Blog/Blog"));
const Changelog = lazy(() => import("./pages/otherpages/ChangeLog/Changelog"));
const Contact = lazy(() => import("./pages/otherpages/Contact/Contact"));
const PowerUps = lazy(() => import("./pages/otherpages/PowerUps/PowerUps"));
const PageNotFound = lazy(() => import("./pages/otherpages/PageNotFound/PageNotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet 
          titleTemplate="%s | Draftr" 
          defaultTitle="Draftr - The Ultimate Design Toolkit" 
        />
        <SmoothScroll>
          <Layout />
          <ScrollRestoration />
        </SmoothScroll>
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "changelog", element: <Changelog /> },
      { path: "contact", element: <Contact /> },
      { path: "powerups", element: <PowerUps /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <HelmetProvider>
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-bold">Loading Draftr...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </HelmetProvider>
    </LazyMotion>
  )
}

export default App
