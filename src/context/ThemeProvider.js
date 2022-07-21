import React, { createContext, useState, useEffect, useRef } from "react";

const ThemeContext = createContext();

const temaInicial = localStorage.getItem('theme') === "true" ? true : false

export function ThemeProvider({children}){

    const [theme, setTheme] = useState(temaInicial);
    const switcher = useRef(null);

    function handleTheme(e){

        if(switcher.current.dataset.theme === 'true'){
            switcher.current.dataset.theme = false;
            setTheme(false);

        }else if(switcher.current.dataset.theme === 'false'){
            switcher.current.dataset.theme = true;
            setTheme(true);

        }
    };

    const data = {theme, handleTheme, switcher};

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme])

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    );
}

export default ThemeContext;