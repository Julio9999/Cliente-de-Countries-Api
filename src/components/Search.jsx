import React, {  useContext } from "react";
import styles from "../styleSheets/Search.module.css";
import { FaSearch } from "react-icons/fa";
import ThemeContext from "../context/ThemeProvider"

export function Search(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ? `${styles["input-group"]} ${styles.light}` : styles["input-group"]} >
            <FaSearch className={styles["input-group__icon"]} />
            <input
                className={styles["input-group__input"]}
                id="input-search"
                type="search"
                placeholder="Search for a country..."
                value={props.searchText}
                onChange={(e) => props.setSearchText(e.target.value)}
                autoComplete="off" />
        </div>
    );
}