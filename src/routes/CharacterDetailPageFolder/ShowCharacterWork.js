import "./CharacterDetailPage.css";

function ShowCharacterWork({ work, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="workContent">
        {!!work.length &&
          work.map((item) => <li key={item.name}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default ShowCharacterWork;
