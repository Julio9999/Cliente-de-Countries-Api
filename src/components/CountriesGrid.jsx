import React, { useEffect, useState, useRef } from "react";
import { getData } from "../utils/getData.js";
import { Country } from "./Country.jsx";
import styles from "../styleSheets/CountriesGrid.module.css";
import { Spinner } from "./Spinner.jsx";
import { ButtonBack } from "./ButtonBack.jsx";
import { sliceArray } from "../utils/sliceArray.js";
import { ButtonHome } from "./ButtonHome.jsx";


export function CountriesGrid({ search, region }) {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const page = useRef(0);
    const allCountries = useRef(null);



    function setObserver(element) {
        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (page.current + 1 < allCountries.current.length) {
                        page.current = page.current + 1;
                        setCountries((prevCountries) => prevCountries.concat(allCountries.current[page.current]));
                    }
                    observer.unobserve(element)
                }
            })
        }

        const options = {
            threshold: 1
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(element);
    }




    useEffect(() => {
            const searchUrl = search
                ? "name/" + search
                : region ? "region/" + region : "all"
            setIsLoading(true)
            getData(searchUrl).then(data => {
                const array = sliceArray(data);
                allCountries.current = array;
                setCountries(allCountries.current[page.current]);
                setIsLoading(false);
            })
    }, [region, search])

    if (isLoading) {
        return <Spinner />
    }

    if (search || region) {
        return (

            <ul className={styles["country-container"]} >
                <div className={styles["button-container"]}>
                    <ButtonBack />
                    <ButtonHome />
                </div>

                {
                    countries.map((country, index, arr) => {
                        return <Country country={country.arr} key={country.id} observar={index + 1 === arr.length} setObserver={setObserver} />
                    })
                }
            </ul>

        )
    }


    return (
        <ul className={styles["country-container"]} >
            {
                countries.map((country, index, arr) => (
                    <Country country={country.arr} key={country.id} observar={index + 1 === arr.length}
                        setObserver={setObserver} />
                ))
            }
        </ul>
    )

}
