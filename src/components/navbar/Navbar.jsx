import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold">
        <Link href="/">Skool</Link>
      </h3>

      <div>
        {links.map((link) => (
          <Link key={link.id} className="mx-3 focus:font-bold" href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className="bg-gray-300 text-black p-2 rounded-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
