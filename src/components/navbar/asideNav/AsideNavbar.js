import React, {useState} from 'react';
import styles from './AsideNavbar.module.css';
import AsideCard from './AsideCard';
import NavContainer from './AsideNavContainer';

import logo from '../../../images/logo.png';
import wallet from '../../../images/wallet.png';
import { FaAlignJustify } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { AiTwotoneStar } from 'react-icons/ai';


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(!navOpen)
  }

 

  return (
    <aside className={styles.aside}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo' />

        {!navOpen ? (
          <FaAlignJustify
            style={{ fontSize: '30px', color: '#fff' }}
            onClick={openNav}
            className={styles.toggleIcon}
          />
        ) : (
          <FaTimes
            style={{ fontSize: '30px', color: '#fff' }}
            onClick={openNav}
            className={styles.toggleIcon}
          />
        )}
      </div>

      <div className={`${!navOpen && styles.asideContent}`}>
        <div className={styles.asideWallet}>
          <div className={styles.asideWalletContainer}>
            <div className={styles.asideWalletContent}>
              <div className={styles.asideWalletImg}>
                <img src={wallet} alt='wallet' />
              </div>
              <div className={styles.asideWalletBallanceContainer}>
                <p>Wallet Balance</p>
                <p className={styles.asideWalletAmount}>$15,001.00</p>
              </div>
            </div>
            <AiFillEye color={'fff'} />
          </div>
          <hr />

          <div className={styles.asideWalletContainer}>
            <div className={styles.asideWalletContent}>
              <div className={styles.asideWalletImg}>
                <AiTwotoneStar
                  style={{
                    color: '#F59E0B',
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                />
              </div>
              <div className={styles.asideWalletBallanceContainer}>
                <p>Awarded Points</p>
                <p className={styles.asideWalletAmount}>35</p>
              </div>
            </div>
          </div>
          <hr />

          <div className={styles.actionButtons}>
            <button className={styles.btn1}>Pay-In</button>
            <button className={styles.btn2}>Pay-Out</button>
          </div>
        </div>

        <NavContainer />
        <AsideCard />
      </div>
    </aside>
  );
};

export default Navbar;
