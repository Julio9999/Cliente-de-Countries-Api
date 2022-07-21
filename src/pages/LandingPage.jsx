import { CountriesGrid } from "../components/CountriesGrid";
import { Form } from "../components/Form";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    const query = useQuery();
    const search = query.get("search");
    const region = query.get("region");


    return(
        <>
            <Form />
            <CountriesGrid key={search ? search : region ? region : ""} search={search} region={region} />
        </>
    );
}