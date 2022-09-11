import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import Logo from '../../images/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className={styles.navbar}>
            <img src={Logo} alt="logo" />
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>
                        <a href="/">Learn More</a>
                    </li>
                    <li>
                        <a href="/">Log in</a>
                    </li>
                    <li>
                        <a href="/">Sign up</a>
                    </li>
                    <li>
                        <AiOutlineSearch 
                            size={25}
                            style={{ marginTop: "6px" }} 
                        />
                    </li>
                    <li>
                        <AiOutlineUser 
                            size={25}
                            style={{ marginTop: "6px" }}
                        />
                    </li>
                </ul>
            </nav>
            <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
        </header>
    );
}

export default Navbar;
