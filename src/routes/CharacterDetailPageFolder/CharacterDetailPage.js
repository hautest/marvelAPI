import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShowCharacterWork from "./ShowCharacterWork";
import { getMarvelDetail } from "../../store/slice";
import "./CharacterDetailPage.css";

function CharacterDetailPage() {
  const data = useSelector((state) => state.marvelDetail.detail);
  const dispatch = useDispatch();
  const { characterId } = useParams();
  useEffect(() => {
    dispatch(getMarvelDetail(characterId));
  }, [characterId, dispatch]);

  if (!data) return null;

  const comicsArr = data.comics.items;
  const seriesArr = data.series.items;
  const storiesArr = data.stories.items;

  const workArr = [
    { work: comicsArr, title: "COMICS" },
    { work: seriesArr, title: "SERIES" },
    { work: storiesArr, title: "STORIES" },
  ];

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
