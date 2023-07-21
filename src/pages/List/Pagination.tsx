import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PAGE_DIVIDER, TOTAL_PAGE } from "lib/constant/main";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, setPage }: Props) => {
  const pageBundle = Array(PAGE_DIVIDER)
    .fill(0)
    .map(
      (_, i) => Math.floor((page - 1) / PAGE_DIVIDER) * PAGE_DIVIDER + i + 1
    );

  const moveBackward = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const moveForward = () => {
    if (page === TOTAL_PAGE) return;
    setPage(page + 1);
  };

  return (
    <div className="flex gap-8 justify-center items-center mt-8">
      <button onClick={moveBackward}>
        <FaAngleLeft size={24} className="hover:scale-150 duration-300" />
      </button>
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
      <button onClick={moveForward}>
        <FaAngleRight size={24} className="hover:scale-150 duration-300" />
      </button>
    </div>
  );
};

export default Pagination;
