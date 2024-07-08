"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
const Providers = ({children}) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 select-none duration-300 transition-colors  dark:bg-gray-700 min-h-screen ">
      {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
