import React from "react";
import { Link } from "react-router-dom";

function CharactersList({ apiData }) {
  console.log(apiData);
  return (
    apiData &&
    apiData.map((data) => (
      <div key={data.id}>
        <img
          alt="사진없음"
          width="100px"
          height="100px"
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        />
        <Link state={{ data: data }} to={`/CharacterInformation/${data.name}`}>
          {data.name}
        </Link>
      </div>
    ))
  );
}

export { CharactersList };
