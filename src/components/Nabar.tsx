import { Link } from "react-router-dom";

function Nabar() {
  return (
    <>
      <nav className="flex md:flex text-center item-center justify-between gap-4 bg-blue-500 dark:bg-blue-800 text-white  p-5 ">
        <header className="mx-20">
          <h1 className="text-xl">Chia-dev</h1>
        </header>
        <ul className="flex gap-10 mx-20 text-center item-center">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <button className="border-4 border-red-500">Hire ME</button>
      </nav>
    </>
  );
}

export default Nabar;
