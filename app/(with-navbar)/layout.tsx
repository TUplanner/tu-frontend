import Navbar from "@/components/Navbar";

const withNavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {<Navbar />}
      {children}
    </div>
  );
};

export default withNavbarLayout;
