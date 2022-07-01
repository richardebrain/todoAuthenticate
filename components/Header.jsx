import Link from "next/link";
import { useContext } from "react";
import {TodoContext} from '../context/TodoContext';
const Header = () => {
  const { user } = useContext(TodoContext);
console.log(user)
  return (
    <header className="flex justify-between w-11/12 mx-auto mt-6 items-center py-4">
      <nav className="2xl font-bold text-white">My Todos</nav>
      <div className="flex ">
        {user ? <Link href="/api/logout">
          <a className="rounded bg-white dark:bg-gray-800 py-2 px-4">
            Logout
          </a>
        </Link>
:
        <Link href="/api/login">
          <a className="rounded bg-white hover:bg-blue-600 text-black py-2 px-4">
            Login
          </a>
        </Link>}
      </div>
    </header>
  );
};

export default Header;
