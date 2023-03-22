import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import CartInfo from "../../components/CartInfo";
import arrowSvg from "../../assets/img/arrow.svg";
import styles from "./AboutCart.module.scss";

const AboutCart = () => {
  const [items, setItems] = React.useState([]);

  const { id } = useParams();
  let { name, gender, status, species, origin, type } = items;

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div class={styles.wrapper}>
      <header class={styles.header}>
        <div class={styles.back}>
          <Link to="/home">
            <div class={styles.arrow}>
              <img src={arrowSvg} alt="back" />
            </div>
          </Link>
          <Link to="/home">
            <div class={styles.text}>go back</div>
          </Link>
        </div>
      </header>
      <div class={styles.page}>
        <div class={styles.about}>
          <CartInfo key={items.id} {...items} />
        </div>
      </div>
    </div>
  );
};

export default AboutCart;
