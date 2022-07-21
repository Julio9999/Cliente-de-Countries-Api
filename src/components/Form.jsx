import React, { useState, useEffect } from "react";
import styles from "../styleSheets/Form.module.css";
import { useQuery } from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { Search } from "./Search";
import { Select } from "./Select";


export function Form() {

    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();


    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setSearchText(search || "");
    }, [search])


    function handleSubmit(e) {
        e.preventDefault();
        navigate("?search=" + searchText);
    }

    return (
        <form className={styles.form } onSubmit={handleSubmit} >
           <Search searchText= {searchText} setSearchText={setSearchText} />
            <Select />
        </form>
    );
}