import React from "react";
import { CharactersList } from "./CharactersList";
import { Paging } from "./Paging";

export function Main({ apiData, handleSetApiData, handlePageChange, page }) {
  return (
    <div>
      <CharactersList apiData={apiData} />
      <Paging
        handleSetApiData={handleSetApiData}
        handlePageChange={handlePageChange}
        page={page}
      />
    </div>
  );
}
