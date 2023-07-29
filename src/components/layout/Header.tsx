import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 bg-slate-100 px-4">
      <div className="flex items-center h-full">
        <Link to="/">
          <h2 className="font-bold text-2xl">post-list</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
