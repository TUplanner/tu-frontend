import Link from "next/link";
import { accessibleRoutes } from "@/lib/constants";
const Navbar = () => {
  return (
    <nav>
      <ul className="max-h-20 px-10 py-6 w-full flex justify-between items-center">
        {accessibleRoutes.map((item, index) => (
          <li key={index}>
            <Link className={`${index == 0 && "text-3xl"}`} href={item.route}>
              <h1>{item.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
