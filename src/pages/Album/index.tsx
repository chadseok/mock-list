import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import type { AlbumData, PhotoData } from "lib/types/main";
import Photo from "./Photo";

const Album = () => {
  const albumData = useLoaderData() as {
    photoList: PhotoData[];
    albumInfo: AlbumData;
  };
  const [isModalOn, setIsModalOn] = React.useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  const openPhotoModal = (photoIndex: number) => {
    setIsModalOn(true);
    setCurrentPhotoIndex(photoIndex);
  };

  const closePhotoModal = () => {
    setIsModalOn(false);
  };

  const movePrevPhoto = () => {
    if (currentPhotoIndex === 0)
      setCurrentPhotoIndex(albumData.photoList.length - 1);
    else setCurrentPhotoIndex(currentPhotoIndex - 1);
  };

  const moveNextPhoto = () => {
    if (currentPhotoIndex === albumData.photoList.length - 1)
      setCurrentPhotoIndex(0);
    else setCurrentPhotoIndex(currentPhotoIndex + 1);
  };

  return (
    <div className="mx-auto px-4 py-8 w-[40rem]">
      <h2 className="text-3xl font-bold mb-8">{albumData.albumInfo.title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {albumData.photoList.map((photo, index) => (
          <Photo
            key={photo.id}
            photoData={photo}
            openPhotoModal={() => openPhotoModal(index)}
          />
        ))}
      </div>
      {isModalOn && (
        <div className="fixed top-0 right-0 z-20 w-full h-screen bg-black/60">
          <div className="flex justify-center items-center gap-16 h-full">
            <button onClick={movePrevPhoto} className="p-4">
              <AiOutlineLeft size={80} fill="white" />
            </button>
            <div className="bg-white p-4">
              <img
                src={albumData.photoList[currentPhotoIndex].url}
                alt={albumData.photoList[currentPhotoIndex].title}
              />
              <h2 className="mt-4 text-2xl text-center font-semibold italic">
                {albumData.photoList[currentPhotoIndex].title}
              </h2>
            </div>
            <button onClick={moveNextPhoto} className="p-4">
              <AiOutlineRight size={80} fill="white" />
            </button>
          </div>
          <button
            className="absolute top-0 right-0 p-4"
            onClick={closePhotoModal}
          >
            <AiOutlineClose size={50} fill="white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Album;
