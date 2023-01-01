import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ListaUsuarios from "../../../components/Admin/UserList/ListaUsuarios";

const ListaAlumnosPage = () => {
    const [alumnos, setAlumnos] = useState([]);
    const getData = async () => {
        const {data} = await axios.get('/api/alumnos');
        setAlumnos(data);
    };
    
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {
                alumnos.length > 0 
                ? <ListaUsuarios users={alumnos} />
                : <h1>No hay alumnos</h1>
            }
        </div>
    );
};

export default ListaAlumnosPage;