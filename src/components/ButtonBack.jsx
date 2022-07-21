import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../styleSheets/ButtonBack.module.css";
import ThemeContext from "../context/ThemeProvider"

export function ButtonBack(){
    const { theme } = useContext(ThemeContext);
    const { name } = useParams();

    return(
        <Link to={-1}
        className={
        theme
        ?   name ? `${styles.back} ${styles["back-CountryDetails"]} ${styles.light}` : `${styles.back} ${styles.light}`
        :   name ? `${styles.back} ${styles["back-CountryDetails"]} ` : `${styles.back}`
        }
        >
        <FaArrowLeft />Back
        </Link>
    )
}