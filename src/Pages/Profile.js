
import {Banner} from "../components/Profile/Banner";
import {Form, Button, FormControl, Row, Col} from 'react-bootstrap';
import Data from "bootstrap/js/src/dom/data";
import {DataForm} from "../components/Profile/DataForm";

export const Profile = () => {
    return (
        <>
            <h1>Mi perfil</h1>
            <Banner/>
            <h2 style={{textAlign: "center", marginTop: 60}}>Nombre completo</h2>

            <DataForm/>
        </>
    )
}