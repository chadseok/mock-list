import type { PhotoData } from "lib/types/main";

const Photo = ({
  photoData,
  openPhotoModal,
}: {
  photoData: PhotoData;
  openPhotoModal: () => void;
}) => {
  return (
    <div
      className="flex flex-col border border-slate-200 overflow-hidden rounded-md hover:translate-y-[-0.125rem] shadow-md cursor-pointer"
      onClick={openPhotoModal}
    >
      <img src={photoData.thumbnailUrl} alt={photoData.title} />
      <div className="p-2">
        <h2 className="text-sm line-clamp-2">{photoData.title}</h2>
      </div>
    </div>
  );
};

export default Photo;
