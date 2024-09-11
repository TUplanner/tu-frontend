"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "./contexts/GlobalStateProvider";

const FormRedirector = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data } = useGlobalState();

  useEffect(() => {
    const hasEmptyFields = Object.values(data).some((value) => value === "");
    if (hasEmptyFields) {
      router.push("/gettingstarted");
    }
  }, [data, router]);

  return <section>{children}</section>;
};

export default FormRedirector;
