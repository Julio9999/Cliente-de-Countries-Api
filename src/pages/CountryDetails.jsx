import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getData } from "../utils/getData.js";
import { Spinner } from "../components/Spinner";
import { v4 as uuidv4 } from "uuid";
import styles from "../styleSheets/CountryDetails.module.css"
import { ButtonBack } from "../components/ButtonBack.jsx";
import ThemeContext from "../context/ThemeProvider"


export function CountryDetails() {

    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setIsLoading(true);
        getData(`/name/${name}`).then(data => {
            setCountry(data[0]);
            setIsLoading(false);
        })

    }, [name])

    if (isLoading) {
        return <Spinner />
    }

    function getCurrencies(argument) {
        let currencies = "";
        for (let key in argument) {
            argument[key].symbol
                ? currencies += " " + argument[key].name + " " + argument[key].symbol
                : currencies += " " + argument[key].name
        }
        return currencies;
    }

    function getLanguages(argument) {
        let languages = "";
        for (let key in argument) {
            languages += " " + argument[key] + ", "
        }

        return languages ? languages.replace(/,\s$/, '.') : " Has no languages.";
    }


    return (
        <div className={theme ? `${styles.country} ${styles.light}` : styles.country}>


            <ButtonBack className={styles.button} />
            <div className={styles["img-container"]}>
                <img src={country.flags.png} alt={country.name.common} />
            </div>

            <div className={styles["text-container"]}>

                <div className={styles["text-country"]}>

                    <div className={styles["text-country-main"]}>
                        <h2 className={styles["text-country-main-name"]}>{country.name.common}</h2>
                        <span>Native Name:
                            <span className={styles["light-text"]}>
                                {country.name.nativeName ? " " + Object.values(country.name.nativeName)[0].common + "." : " Has no native name."}
                            </span>
                        </span>
                        <span>Population:
                            <span className={styles["light-text"]}>
                                {" " + Intl.NumberFormat('en-US').format(country.population) + "."}
                            </span>
                        </span>
                        <span>Region:
                            <span className={styles["light-text"]}>{country.region ? " " + country.region + "." : " Has no region"}</span>
                        </span>
                        <span>Sub Region:
                            <span className={styles["light-text"]}>{country.subregion ? " " + country.subregion + ".": " Has no subregion"}</span>
                        </span>
                        <span>Capital:
                            <span className={styles["light-text"]}>
                                {
                                    country.capital
                                        ? " " + country.capital.map((el, index, arr) => index + 1 === arr.length ? " " + el + "." : " " + el )
                                        : " Has no capital."
                                }
                            </span>
                        </span>
                    </div>

                    <div className={styles["text-country-secondary"]}>
                        <span>Top Level Domain: <span className={styles["light-text"]}>{country.tld ? country.tld[0] + ".": " Has no level domain."}</span></span>
                        <span>Currencies: <span className={styles["light-text"]}>{country.currencies ? getCurrencies(country.currencies)+ "." : " Has no currencies."}</span></span>
                        <span>Languages: <span className={styles["light-text"]}>{getLanguages(country.languages)}</span></span>
                    </div>
                </div>

                <div className={styles["borders-container"]}>
                    Border Countries:
                    {country.borders
                        ? <ul className={styles.borders}>{country.borders.map(el => {
                            return <li className={theme  ? `${styles.border} ${styles["border-light"]}` : styles.border} key={uuidv4()}>{el}</li>
                        })}
                        </ul>
                        : <span className={styles["light-text"]}> Has no borders.</span>}
                </div>
            </div>

        </div>
    );
}
