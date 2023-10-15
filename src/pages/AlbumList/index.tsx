import { AlbumData } from "lib/types/main";
import { useLoaderData } from "react-router-dom";
import AlbumItem from "./AlbumItem";

const AlbumList = () => {
  const albumList = useLoaderData() as AlbumData[];

  return (
    <div className="mx-auto px-4 py-8 w-[40rem]">
      <h2 className="text-3xl font-bold mb-8">Album 리스트</h2>
      {albumList.map((album) => (
        <AlbumItem albumData={album} />
      ))}
    </div>
  );
};

export default AlbumList;
