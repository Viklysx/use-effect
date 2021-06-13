import { useEffect, useState } from "react";
import List from "./List";
import Details from "./Details";

export default function Users() {
  const [card, setCard] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const contentList = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const cards = await response.json();
        setCard(cards);
      } catch (e) {
        console.error(e);
      }
    };
    contentList();
  }, []);

  const handleClick = (e) => {
    setInfo(e);
  };

  return (
    <>
      <div>
        <List handleClick={handleClick} card={card} id={info.id} />
      </div>
      <Details info={info} />
    </>
  );
}
