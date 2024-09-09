// app/components/ClientPathname.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const ClientPathname = () => {
  const [pathname, setPathname] = useState("");
  const currentPath = usePathname();

  useEffect(() => {
    setPathname(currentPath); // Update the pathname when it changes
  }, [currentPath]);

  return <h1>Current Path: {pathname}</h1>; // Display the pathname
};
