import ArrowLeft from "../../assets/icons/arrowLeft";
import ArrowRight from "../../assets/icons/arrowRight";

const Pagination = ({ pageCount, setPageCount, maxPages }) => {

  // next page function
  const nextPage = () => {
    setPageCount(pageCount + 1);
  };

  // previous page function
  const previousPage = () => {
    setPageCount(pageCount - 1);
  };

  return (
    <div className="flex justify-center">

      {/* left arrow */}

      <button
        disabled={pageCount === 1 || pageCount < 1}
        className="disabled:opacity-60 bg-red rounded"
        onClick={previousPage}>

        {/* svg hecho componente */}
        <ArrowLeft />
      </button>

      {/* pages */}

      <div className="flex items-center px-2">
        <p className="text-otherBlue text-lg sm:text-xl font-bold px-1 text-white">
          {pageCount}
        </p>
        <span className="text-otherBlue text-lg sm:text-xl font-bold px-1 text-white">
          -
        </span>
        <p className="text-otherBlue text-lg sm:text-xl font-bold px-1 text-white">
          {Math.ceil(maxPages)}
        </p>
      </div>

      {/* right arrow */}

      <button
        className="disabled:opacity-60 bg-red rounded"
        onClick={nextPage}
        disabled={pageCount === maxPages || pageCount > maxPages}>

          {/* svg hecho componente */}
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
