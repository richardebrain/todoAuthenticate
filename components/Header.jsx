import Link from "next/link";
const Header = () => {
  return (
    <header className="flex justify-between w-11/12 mx-auto mt-6 items-center py-4">
      <nav className="2xl font-bold text-gray-800">My Todos</nav>
      <div className="flex ">
        <Link href="/api/logout">
          <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
            Logout
          </a>
        </Link>

        <Link href="/api/login">
          <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
            Login
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
