import React, { useContext, useState, useEffect } from "react";
import styles from "../styleSheets/Select.module.css";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeProvider";
import { useQuery } from "../hooks/useQuery";


export function Select() {
	const { theme } = useContext(ThemeContext);
	const [text, setText] = useState("Filter By Region")

	const query = useQuery();
    const region = query.get("region");

	useEffect(() => {
		if(region){
			setText(region);
		}else{
			setText("Filter By Region")
		}
	}, [region])


	const navigate = useNavigate();

	function handleClickSelect(e) {
		document.getElementById('select').classList.toggle(styles["active"]);
		document.getElementById('arrow').classList.toggle(styles["up-arrow"]);
	}

	function handleClickLi(e) {
		navigate("?region=" + e.target.dataset.name);
		setText(e.target.dataset.name);
	}

	return (
		<div
			className={theme ? `${styles["select-group"]} ${styles.light}` : styles["select-group"]}
			onClick={handleClickSelect}>
			<div className={styles["select"]}>
				<span className={styles["select__focus"]} id="select-focus">{text}</span>
				<FaArrowDown className={styles.arrow} id="arrow" />
			</div>

			<div className={styles["select-list-container"]}>
				<ul className={styles["select-list"]} id="select">
					<li className={styles["select-list__option"]} data-name="africa" onClick={handleClickLi}>Africa</li>
					<li className={styles["select-list__option"]} data-name="americas" onClick={handleClickLi}>America</li>
					<li className={styles["select-list__option"]} data-name="asia" onClick={handleClickLi}>Asia</li>
					<li className={styles["select-list__option"]} data-name="europe" onClick={handleClickLi}>Europe</li>
					<li className={styles["select-list__option"]} data-name="oceania" onClick={handleClickLi}>Oceania</li>
				</ul>
			</div>
		</div>
	);
}