import { useNavigate } from "react-router-dom";
import Form from "../components/Form"

function login(){

    return (
            <Form route="/api/token/" method="login"></Form>
    );
}

export default login