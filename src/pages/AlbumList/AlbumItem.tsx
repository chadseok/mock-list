import type { AlbumData } from "lib/types/main";
import { Link } from "react-router-dom";

const AlbumItem = ({ albumData }: { albumData: AlbumData }) => {
  return (
    <Link to={`/albums/${albumData.id}`}>
      <div className="rounded-md p-4 mb-2 bg-slate-100 hover:bg-slate-200 border border-slate-300">
        <h2>
          {albumData.id}. {albumData.title}
        </h2>
      </div>
    </Link>
  );
};

export default AlbumItem;
