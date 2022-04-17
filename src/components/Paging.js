import { Button } from "./Button";
import "./Paging.css";

function Paging({ handlePageChange, page, maxPage }) {
  return (
    <div className="buttonBox">
      <button onClick={() => handlePageChange(1)}>&lt;&lt;</button>
      <button onClick={() => handlePageChange(page > 5 ? page - 5 : 1)}>
        &lt;
      </button>
      <Button
        page={page}
        handlePageChange={handlePageChange}
        maxPage={maxPage}
      />
      <button onClick={() => handlePageChange(page < 170 ? page + 5 : maxPage)}>
        &gt;
      </button>
      <button onClick={() => handlePageChange(maxPage)}>&gt;&gt;</button>
    </div>
  );
}

export { Paging };
