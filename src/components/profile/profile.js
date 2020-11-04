import React from 'react';
import styles from './profile.module.scss';
import { FaTwitch, FaTwitter, FaPlaystation, FaPen } from "react-icons/fa";

const Profile = () => {
  return(
    <section className={styles.content}>
      <section className={styles.info}>
        <div className={styles.profile}>
          <img className={styles.profile__image} alt="Profile" src="https://images.pexels.com/photos/4009623/pexels-photo-4009623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=600" />
          <FaPen className={styles.button}></FaPen>
        </div>
         <p className={styles.name}>Fran Amaterasu</p>
         <p className={styles.city}>Madrid - <span>ES</span></p>
         <nav className={styles.social}>
           <a className={styles.social__item} href="@" title="Twitch">
             <FaTwitch className={styles.social__icon} />
           </a>
           <a className={styles.social__item} href="@" title="Twitter">
             <FaTwitter className={styles.social__icon}/>
           </a>
           <a className={styles.social__item} href="@" title="PlayStation">
             <FaPlaystation className={styles.social__icon}/>
           </a>
         </nav>
         <p className={styles.bio}>I'm baby +1 before they sold out succulents plaid church-key mixtape venmo subway tile marfa vape af ennui pok pok flannel poke.</p>
      </section>
    </section>
  )
}

export default Profile;
