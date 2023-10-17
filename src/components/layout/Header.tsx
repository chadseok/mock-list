import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-10 w-full h-16 border-b border-slate-200 backdrop-blur-2xl">
      <div className="flex justify-between items-center h-full w-[40rem] mx-auto px-4">
        <Link to="/">
          <img className="h-8" src="/assets/logo.svg" alt="header_icon" />
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link to="/posts">
              <span>📝post</span>
            </Link>
          </li>
          <li>
            <Link to="/albums">
              <span>📔album</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
