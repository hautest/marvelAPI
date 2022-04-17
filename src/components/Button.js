import { useEffect, useState } from "react";

export function Button({ page, handlePageChange, maxPage }) {
  const [buttonPage, setButtonPage] = useState([]);
  useEffect(() => {
    if (page === 1) {
      setButtonPage([page, page + 1, page + 2, page + 3, page + 4]);
    } else if (page === 2) {
      setButtonPage([page - 1, page, page + 1, page + 2, page + 3]);
    } else if (page === maxPage) {
      setButtonPage([page - 2, page - 1, maxPage]);
    } else if (page + 1 === maxPage) {
      setButtonPage([page - 2, page - 1, page, page + 1]);
    } else {
      setButtonPage([page - 2, page - 1, page, page + 1, page + 2]);
    }
  }, [page, maxPage]);
  return (
    <>
      {!!buttonPage.length &&
        buttonPage.map((pageValue) => (
          <button
            onClick={(event) => {
              handlePageChange(Number(event.target.innerText));
            }}
            key={pageValue}
          >
            {pageValue}
          </button>
        ))}{" "}
    </>
  );
}
