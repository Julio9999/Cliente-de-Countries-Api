import React from "react";
import styles from "../styleSheets/Header.module.css";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../context/ThemeProvider";

export function Header(){
    const {theme, handleTheme, switcher} = useContext(ThemeContext);

    return(
        <header className={theme ? `${styles.header} ${styles.light}` : styles.header} >
            <div className={styles.heading__text}>Where in the world?</div>
            <div className={styles.heading__icon}  ref={switcher} data-theme={theme} onClick={handleTheme}>
                { theme ? <FaMoon  /> : <FaSun />}
                    <span id="dark-mode-text">{theme  ? "Dark Mode" : "Light Mode"}</span>
            </div>
        </header>
    );
}