import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="max-h-20 px-10 py-6 w-full flex justify-between items-center">
        <li>
          <Link href={"/"}>
            <h1 className="text-3xl">TUplanner</h1>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
