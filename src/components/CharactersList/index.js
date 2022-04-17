import { memo } from "react";
import { Link } from "react-router-dom";
import "./CharactersList.css";

const CharactersListItem = memo(({ data }) => {
  return (
    <Link className="characterLsitName" to={`/character-detail/${data.id}`}>
      <li className="characterLsitImgNameBox" key={data.id}>
        <img
          className="characterLsitImg"
          alt={data.name}
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        />
        {data.name}
      </li>
    </Link>
  );
});

function CharactersList({ apiData }) {
  return (
    <ul className="charactersListDisplay">
      {apiData.map((data) => (
        <CharactersListItem key={data.id} data={data} />
      ))}
    </ul>
  );
}

export { CharactersList };
