import styles from "../styleSheets/Country.module.css";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeProvider"
import { useContext, useRef, useEffect } from "react";

export function Country(props) {

    const { theme } = useContext(ThemeContext);
    const target = useRef(null);


    useEffect(() => {
        if (target.current !== null) {
            props.setObserver(target.current);
        }
    })


    return (
        <li className={theme  ? `${styles.country} ${styles.light}` : styles.country} id={props.id}>
            <Link to={`countries/${props.country.name.common}`} ref={props.observar ? target : null} id={props.id}  >
                <div className={styles["img-container"]}>
                    <img className={styles.img} src={props.country.flags.png} alt="bandera" loading="lazy" />
                </div>
                <div className={styles["text-container"]} >
                    <h2>{props.country.name.common}</h2>
                    <p>
                        <span>Population: <span className={styles["light-text"]} >{Intl.NumberFormat('en-US').format(props.country.population)+ "."}</span> </span>
                    </p>
                    <p>
                        <span>Region: <span className={styles["light-text"]} >{props.country.region+ "."}</span> </span>
                    </p>
                    <p>
                        <span>Capital: <span className={styles["light-text"]} >{props.country.capital ? props.country.capital + "." : "Has no capital."}</span> </span>
                    </p>
                </div>
            </Link>
        </li>
    );

}