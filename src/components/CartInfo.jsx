import React from "react";

import styles from "../pages/AboutCart/AboutCart.module.scss";

function CartInfo({ name, image, gender, status, species, origin, type }) {
  const typeValue = type === "" ? (type = "Unknown") : type;

  function capitalizeFirstLetter(props) {
    return props[0].toUpperCase() + props.substring(1);
  }
  return (
    <div className={styles.container}>
      <div className={styles.about__avatar}>
        <img src={image} alt="avatar" />
      </div>
      <h1 className={styles.about__name}>{name}</h1>
      <div className={styles.about__info}>
        <div className={styles.about__title}>Informations</div>
        <div className={styles.about__items}>
          <div className={styles.about__item}>
            <div className={styles.about__character}>Gender</div>
            <div className={styles.about__value}>
              {capitalizeFirstLetter(`${gender}`)}
            </div>
          </div>
          <div className={styles.about__item}>
            <div className={styles.about__character}>Status</div>
            <div className={styles.about__value}>
              {capitalizeFirstLetter(`${status}`)}
            </div>
          </div>
          <div className={styles.about__item}>
            <div className={styles.about__character}>Specie</div>
            <div className={styles.about__value}>
              {capitalizeFirstLetter(`${species}`)}
            </div>
          </div>
          <div className={styles.about__item}>
            <div className={styles.about__character}>Origin</div>
            <div className={styles.about__value}>
              {capitalizeFirstLetter(`${origin?.name}`)}
            </div>
          </div>
          <div className={styles.about__item}>
            <div className={styles.about__character}>Type</div>
            <div className={styles.about__value}>
              {capitalizeFirstLetter(`${typeValue}`)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartInfo;
