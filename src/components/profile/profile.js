import React, { useState } from "react";
import styles from "./profile.module.scss";
import { FaTwitch, FaTwitter, FaSteamSymbol, FaPen } from "react-icons/fa";

const Profile = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [twitch, setTwitch] = useState("");
  const [twitter, setTwitter] = useState("");
  const [steam, setSteam] = useState("");
  const [bio, setBio] = useState("");

  // Función para mostrar el modal
  const handleShowModalClick = () => {
    setShowModal(true);
  };

  // Función para ocultar el modal
  const handleSubmitFormClick = () => {
    setShowModal(false);
  };

  // Funcion para recoger el nick
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  // Función para recoger la ciudad
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  // Función para recoger el país
  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  // Función para recoger el nickname de twicht
  const handleChangeTwitch = (e) => {
    setTwitch(e.target.value);
  };

  // Función para recoger el nickname de twitter
  const handleChangeTwitter = (e) => {
    setTwitter(e.target.value);
  };

  // Función para recoger el nickname de steam
  const handleChangeSteam = (e) => {
    setSteam(e.target.value);
  };

  // Función para recoger la bio
  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };

  // Función para resetear el formulario
  const handleRsetFormClick = () => {
    setName("");
    setCity("");
    setCountry("");
    setTwitch("");
    setTwitter("");
    setSteam("");
    setBio("");
  };

  return (
    <>
      <section className={styles.content}>
        <section className={styles.info}>
          <div className={styles.profile}>
            <img
              className={styles.profile__image}
              alt="Profile"
              src="https://images.pexels.com/photos/4009623/pexels-photo-4009623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=600"
            />
            <FaPen
              className={styles.button}
              onClick={handleShowModalClick}
            ></FaPen>
          </div>
          <p className={styles.name}>{name}</p>
          <p className={styles.city}>
            {city} - <span>{country}</span>
          </p>
          <nav className={styles.social}>
            <a
              className={styles.social__item}
              href={`https://www.twitch.tv/${twitch}`}
              title="Twitch"
              target="_black"
            >
              <FaTwitch className={styles.social__icon} />
            </a>
            <a
              className={styles.social__item}
              href={`https://twitter.com/${twitter}`}
              title="Twitter"
              target="_black"
            >
              <FaTwitter className={styles.social__icon} />
            </a>
            <a
              className={styles.social__item}
              href={`https://steamcommunity.com/id/${steam}`}
              title="Steam"
              target="_black"
            >
              <FaSteamSymbol className={styles.social__icon} />
            </a>
          </nav>
          <p className={styles.bio}>{bio}</p>
        </section>
      </section>
      {showModal && (
        <section className={styles.modal}>
          <form className={styles.modal__container}>
            <div className={`${styles.form__row} ${styles["form__row--one"]}`}>
              <input
                className={styles.form__input}
                type="text"
                placeholder="New nickname"
                value={name}
                onChange={handleChangeName}
              />
            </div>
            <div className={`${styles.form__row} ${styles["form__row--two"]}`}>
              <input
                className={styles.form__input}
                type="text"
                value={city}
                placeholder="Your city"
                onChange={handleChangeCity}
              />
              <input
                className={styles.form__input}
                type="text"
                value={country}
                placeholder="Your country code"
                onChange={handleChangeCountry}
              />
            </div>
            <div
              className={`${styles.form__row} ${styles["form__row--three"]}`}
            >
              <input
                className={styles.form__input}
                type="text"
                value={twitch}
                placeholder="Your twitch nickname"
                onChange={handleChangeTwitch}
              />
              <input
                className={styles.form__input}
                type="text"
                value={twitter}
                placeholder="Your twitter nickname"
                onChange={handleChangeTwitter}
              />
              <input
                className={styles.form__input}
                type="text"
                value={steam}
                placeholder="Your steam nickname"
                onChange={handleChangeSteam}
              />
            </div>
            <div className={`${styles.form__row} ${styles["form__row--one"]}`}>
              <textarea
                className={styles.form__textarea}
                value={bio}
                placeholder="Your little bio"
                onChange={handleChangeBio}
              />
            </div>
            <section className={styles.form__buttons}>
              <button
                className={`${styles.form__button} ${styles["form__button--submit"]}`}
                onClick={handleSubmitFormClick}
              >
                Change your info
              </button>
              <button
                className={`${styles.form__button} ${styles["form__button--reset"]}`}
                onClick={handleRsetFormClick}
              >
                Reset form
              </button>
              <button
                className={`${styles.form__button} ${styles["form__button--exit"]}`}
                onClick={handleSubmitFormClick}
              >
                Exit
              </button>
            </section>
          </form>
        </section>
      )}
    </>
  );
};

export default Profile;
