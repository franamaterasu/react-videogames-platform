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
          <form>
            <section className={styles.modal__container}>
              <input
                type="text"
                placeholder="New nickname"
                onChange={handleChangeName}
              />
              <input
                type="text"
                placeholder="Your city"
                onChange={handleChangeCity}
              />
              <input
                type="text"
                placeholder="Your country code"
                onChange={handleChangeCountry}
              />
              <input
                type="text"
                placeholder="Your twitch nickname"
                onChange={handleChangeTwitch}
              />
              <input
                type="text"
                placeholder="Your twitter nickname"
                onChange={handleChangeTwitter}
              />
              <input
                type="text"
                placeholder="Your steam nickname"
                onChange={handleChangeSteam}
              />
              <textarea
                placeholder="Your little bio"
                onChange={handleChangeBio}
              />
              <section className={styles.form__buttons}>
                <button
                  className={styles.form__submit}
                  onClick={handleSubmitFormClick}
                >
                  Change your info
                </button>
                <input type="reset" value="Reset form" />
                <button className={styles.form__exit}>Exit</button>
              </section>
            </section>
          </form>
        </section>
      )}
    </>
  );
};

export default Profile;
