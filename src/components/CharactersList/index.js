import React from "react";
import { Link } from "react-router-dom";
import "./CharactersList.css";

function CharactersList({ apiData }) {
  console.log(apiData);
  return (
    <div>
      {apiData.map((data) => (
        <div key={data.id}>
          <img
            alt="사진없음"
            width="100px"
            height="100px"
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          />
          <Link to={`/character-detail/${data.id}`}>{data.name}</Link>
        </div>
      ))}
    </div>
  );
}

export { CharactersList };
