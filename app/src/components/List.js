import { nanoid } from 'nanoid';

export default function List(props) {
  return (
    <>
      {props.card.map((key) => (
        <div
          onClick={() => props.handleClick(key)}
          className={props.id === key.id ? "element active" : "element"}
          key={nanoid()}
        >
          {key.name}
        </div>
      ))}
    </>
  );
}
