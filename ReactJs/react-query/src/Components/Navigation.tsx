import { Link } from "react-router";

export function Navigation() {
  return (
    <header className="navbar bg-gray-700 text-white shadow-sm ">
      <div className="flex-1 hover:bg-none">
        <Link
          to={"/"}
          className="btn btn-ghost md:text-xl text-sm hover:bg-none"
        >
          <img src="/favicon.svg" alt="React Query Logo" width={40} />
          <span className="">React Query Tutorial</span>
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu font-bold menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <details>
              <summary>Tutorials</summary>
              <ul className="bg-gray-500 rounded-t-none p-2 z-50">
                <li>
                  <Link to={"/basics"}>Basics</Link>
                </li>
                <li>
                  <Link to={"/usequeryproperties"}>Query Properties</Link>
                </li>
                <li>
                  <Link to={"/pagination"}>Pagination</Link>
                </li>
                <li>
                  <Link to={"/infiniteQuery"}>Infinite Query</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </header>
  );
}
