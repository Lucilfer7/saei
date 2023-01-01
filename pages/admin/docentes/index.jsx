import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";
import authRequired from "../../../services/authRequired";

import axios from "axios";

const DocentesPage = () => {
    const router = useRouter();
    const user = useSelector(selectUser);
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        authRequired(router, user);
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios.get('/api/user/docente');
        console.log(data);
    };

    return (
        <div>
            {
                docentes.length === 0
                    ? <h1>No hay docentes</h1>
                    : <ul>
                        {docentes.map(docente => <li>{docente.apellido.toUpperCase()}, {docente.nombre}</li>)}
                    </ul>
            }
        </div>
    );
};

export default DocentesPage;