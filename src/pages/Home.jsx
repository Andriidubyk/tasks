import React from "react";

import debounce from "lodash.debounce";
import Items from "../components/Items/index";
import doodleJpg from "../assets/img/doodle.jpg";
import searchSvg from "../assets/img/search.svg";
import closeSvg from "../assets/img/close.svg";
import Skeleton from "../components/Items/Skeleton";
import { Link } from "react-router-dom";

import "../scss/homestyle.scss";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const useLocalStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    const initial = stored ? JSON.parse(stored) : defaultValue;
    const [state, setState] = React.useState(initial);
    React.useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  };
  const [value, setValue] = useLocalStorage("value", "");
  const [searchValue, setSearchValue] = useLocalStorage("items", "");

  const inputRef = React.useRef();
  const onClickClean = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const searchByName = searchValue ? `name=${searchValue}` : "";
  const api = `https://rickandmortyapi.com/api/character?${searchByName}`;
  React.useEffect(() => {
    setIsLoading(true);
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setItems(data.results.sort((a, b) => a.name.localeCompare(b.name)));
      setIsLoading(false);
    })();
  }, [searchValue]);

  const cards = items.map((obj) => <Items key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <main className="page">
      <div className="page__doodle doodle">
        <Link to="/home" className="doodle__container">
          <img src={doodleJpg} alt="doodle" />
        </Link>
      </div>
      <div className="page__input input">
        <div className="input__container">
          <img className="input__search" src={searchSvg} alt="search" />
          <input
            ref={inputRef}
            onChange={onChangeInput}
            value={value}
            className="input__sort"
            type="text"
            placeholder="Filter by name..."
          />
          {value && (
            <img
              onClick={onClickClean}
              className="input__close"
              src={closeSvg}
              alt="close"
            />
          )}
        </div>
      </div>
      <div className="page__items items">
        <div className="items__container">
          <div className="items__carts">{isLoading ? skeletons : cards}</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
