"use client";
import Link from "next/link";
import { useGlobalState } from "./contexts/GlobalStateProvider";
import { cn } from "@/lib/utils";

interface ClickableLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const ClickableLink: React.FC<ClickableLinkProps> = ({
  children,
  className,
  href,
}) => {
  const { data } = useGlobalState();
  const hasEmptyFields = Object.values(data).some((value) => value === "");

  return (
    <Link
      href={href}
      className={cn(className, hasEmptyFields && "pointer-events-none")}
    >
      {children}
    </Link>
  );
};

export default ClickableLink;
