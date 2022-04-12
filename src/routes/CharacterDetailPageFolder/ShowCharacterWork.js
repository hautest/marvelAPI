export function ShowCharacterWork(props) {
  console.log(props.work);
  return (
    <div>
      {!!props.work.length &&
        props.work.map((item) => <div key={item.name}>{item.name}</div>)}
    </div>
  );
}
