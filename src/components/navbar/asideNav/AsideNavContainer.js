import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AsideNavContainer.module.css';


import { BsGridFill } from 'react-icons/bs';
import { RiWalletLine } from 'react-icons/ri';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { BiDollarCircle } from 'react-icons/bi';
import { MdPeopleAlt } from 'react-icons/md';
import { TiTag } from 'react-icons/ti';

const NavContainer = () => {
  return (
    <nav>
      <div className={styles.dashbooradContainer}>
        <BsGridFill style={{ marginTop: '4px', color: '#017189' }} />
        <p>Dashboard</p>
      </div>

      <ul className={styles.navMenu}>
        <NavLink to='' className={styles.link}>
          <RiWalletLine style={{ marginRight: '18px' }} />
          Wallets
        </NavLink>
        <NavLink to='' className={styles.link}>
          <BsFillCreditCardFill style={{ marginRight: '18px' }} />
          Cards
        </NavLink>
        <NavLink to='' className={styles.link}>
          <BiDollarCircle style={{ marginRight: '18px' }} />
          FX Center
        </NavLink>
        <NavLink to='' className={styles.link}>
          <MdPeopleAlt style={{ marginRight: '18px' }} />
          Beneficiaries
        </NavLink>
        <NavLink to='' className={styles.link}>
          <TiTag style={{ marginRight: '18px' }} />
          Perks
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavContainer;
