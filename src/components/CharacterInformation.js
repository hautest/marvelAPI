import React from "react";
import { useLocation } from "react-router-dom";

function CharacterInformation({ apiData }) {
  console.log(apiData);
  const receivingCharacterData = useLocation().state.data;
  console.log(receivingCharacterData);

  return (
    <div>
      <img
        alt="사진없음"
        width="300px"
        height="300px"
        src={`${receivingCharacterData.thumbnail.path}.${receivingCharacterData.thumbnail.extension}`}
      />
      <div> {receivingCharacterData.name} </div>
      <img alt="사진없음" src={receivingCharacterData.series.collectionURI} />
    </div>
  );
}

export { CharacterInformation };
