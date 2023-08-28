import React from "react";
import "./styles/globals.css";
import { Navigation, Footer } from "@/components";

interface LayoutT {
  children: React.ReactNode;
}

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

const Layout: React.FC<LayoutT> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
