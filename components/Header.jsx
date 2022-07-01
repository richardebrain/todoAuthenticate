import Link from "next/link";
import { useContext } from "react";
import {TodoContext} from '../context/TodoContext';
const Header = () => {
  const { user } = useContext(TodoContext);

  return (
    <header className="flex justify-between  mx-auto w-full px-6 items-center  dark:bg-slate-800 h-[15%]">
      <nav className="2xl font-bold text-white dark:text-white">My Todos</nav>
      <div className="flex ">
        {user ? <Link href="/api/logout">
          <a className="rounded bg-white  text-black py-[6px] px-3 dark:text-white font-bold dark:bg-slate-500 dark:hover:bg-slate-600">
            Logout
          </a>
        </Link>
:
        <Link href="/api/login">
          <a className="rounded bg-white  text-black py-[6px] px-3 dark:text-white  font-bold dark:bg-slate-500 dark:hover:bg-slate-600">
            Login
          </a>
        </Link>}
      </div>
    </header>
  );
};

export default Header;
