const API = "https://restcountries.com/v3.1/"

export  function getData(endpoint){
    return fetch(API + endpoint).then(res => res.json());
}