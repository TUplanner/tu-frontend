import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalStateProvider } from "@/components/contexts/GlobalStateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TUplanner",
  description:
    "TUplanner is your go-to tool for effortless academic scheduling. Search for degree programs like Computer Science B.S. or Accounting B.A., view detailed curricula, and dynamically manage your course schedule. Customize your availability, set credit limits, and select semesters and campuses to fit your needs. With a graphical display of up to five potential schedules, TUplanner makes planning your academic journey simpler and more efficient.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStateProvider>{children}</GlobalStateProvider>
      </body>
    </html>
  );
}
