import React, { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "../styleSheets/Spinner.module.css";
import ThemeContext from "../context/ThemeProvider";

export function Spinner(){
    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.spinner}>
            <FaSpinner className={theme ? `${styles.spinning} ${styles.dark}` : styles.spinning} size={60}/>
        </div>
    );
}