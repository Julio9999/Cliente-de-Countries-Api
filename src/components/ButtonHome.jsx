import React, { useContext }from "react";
import ThemeContext from "../context/ThemeProvider";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "../styleSheets/ButtonBack.module.css"

export function ButtonHome(){

    const { theme } = useContext(ThemeContext);

    return(
        <Link to={"/"} className={theme  ? `${styles.home} ${styles.light}` : styles.home}>
        <FaHome />Home
        </Link>
    );
}