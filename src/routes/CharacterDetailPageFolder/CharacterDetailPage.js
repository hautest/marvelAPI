import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMarvelCharacterDetail } from "../../api/getMarvelCharacterDetail";
import { ShowCharacterWork } from "./ShowCharacterWork";

function CharacterDetailPage() {
  const [data, setData] = useState();
  const { characterId } = useParams();

  useEffect(() => {
    getMarvelCharacterDetail(characterId).then((res) => {
      setData(res.results[0]);
    });
  }, [characterId]);

  if (!data) return null;

  const comicsArr = data.comics.items;
  const seriesArr = data.series.items;
  const storiesArr = data.stories.items;

  console.log(data);
  return (
    <div className="characterInformationBox">
      <img
        width="200px"
        height="200px"
        alt={`${data.name}사진입니다`}
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
      />
      <div>{data.name}</div>
      <ShowCharacterWork work={comicsArr} />
      <ShowCharacterWork work={seriesArr} />
      <ShowCharacterWork work={storiesArr} />
    </div>
  );
}

export default CharacterDetailPage;
