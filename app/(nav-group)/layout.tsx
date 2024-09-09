import Navbar from "@/components/Navbar";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavLayout;
