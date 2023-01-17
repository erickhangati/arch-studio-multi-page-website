import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Home, Portfolio, About, Contact, NotFound } from "./pages";
import { Layout } from "./components/Layout";
import MapProvider from "./store/MapProvider";
import { action } from "./pages/Contact/ContactForm/ContactForm";

// Setting up the routes.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<p>Something went wrong.</p>}
    >
      <Route index element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} action={action} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <MapProvider>
      {/* Setting up router provider */}
      <RouterProvider router={router} />
    </MapProvider>
  );
};

export default App;
