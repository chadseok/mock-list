import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PAGE_DIVIDER, TOTAL_PAGE } from "lib/constant/main";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, setPage }: Props) => {
  const pageBundleNum = Math.floor((page - 1) / PAGE_DIVIDER);
  const LAST_PAGE_BUNDLE = Math.floor((TOTAL_PAGE - 1) / PAGE_DIVIDER);
  const pageBundle = Array(PAGE_DIVIDER)
    .fill(0)
    .map((_, i) => pageBundleNum * PAGE_DIVIDER + 1 + i);

  const moveBackward = () => {
    if (pageBundleNum === 0) return;
    setPage((pageBundleNum - 1) * PAGE_DIVIDER + 1);
  };

  const moveForward = () => {
    if (pageBundleNum === LAST_PAGE_BUNDLE) return;
    setPage((pageBundleNum + 1) * PAGE_DIVIDER + 1);
  };

  return (
    <div className="flex gap-8 justify-center items-center mt-8">
      {pageBundleNum === 0 ? (
        <button className="w-8 h-8"></button>
      ) : (
        <button onClick={moveBackward}>
          <FaAngleLeft size={24} className="hover:scale-150 duration-300" />
        </button>
      )}
      {pageBundle.map((pageNum) => (
        <button
          className={`w-8 h-8 rounded-md ${
            pageNum === page ? "bg-gray-500 text-slate-50" : "bg-gray-100"
          }`}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      {pageBundleNum === LAST_PAGE_BUNDLE ? (
        <button className="w-8 h-8"></button>
      ) : (
        <button onClick={moveForward}>
          <FaAngleRight size={24} className="hover:scale-150 duration-300" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
