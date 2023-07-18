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
    <div>
      <FaAngleLeft onClick={moveBackward} />
      {pageBundle.map((pageNum) => (
        <button onClick={() => setPage(pageNum)}>{pageNum}</button>
      ))}
      <FaAngleRight onClick={moveForward} />
    </div>
  );
};

export default Pagination;
