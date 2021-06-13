import { useState, useEffect } from "react";

export default function Details(props) {
  const [element, setElement] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchElements = async () => {    
      if (props.info.id) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`
          );
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const element = await response.json();
          setElement(element);
          console.log(element);
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchElements();
  }, [props.info.id]);

  return (
    <>
      {isLoading && <div className="loading">Загрузка, ожидайте</div>}
      {Object.keys(element).length === 0 ? null : (
        <div className="person">
          <img src={element.avatar} alt="person" />
          <p className="name">{element.name}</p>
          <p><span>City</span>: {element.details.city}</p>
          <p><span>Company</span>: {element.details.company}</p>
          <p><span>Position</span>: {element.details.position}</p>
        </div>
      )}
    </>
  );
}
