import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMarvelCharacterDetail } from "../../api/getMarvelCharacterDetail";
import ShowCharacterWork from "./ShowCharacterWork";
import "./CharacterDetailPage.css";

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

  const workArr = [
    { work: comicsArr, title: "COMICS" },
    { work: seriesArr, title: "SERIES" },
    { work: storiesArr, title: "STORIES" },
  ];

  console.log(data);
  return (
    <div className="characterInformationBox">
      <img
        className="characterInformationImg"
        width="200px"
        height="200px"
        alt={`${data.name}사진입니다`}
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
      />
      <h1 className="characterInformationName">{data.name}</h1>
      <div className="workContentBox">
        {workArr.map(({ work, title }) => (
          <div>
            <ShowCharacterWork work={work} title={title} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterDetailPage;
