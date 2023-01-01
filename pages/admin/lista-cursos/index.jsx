import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";
import authRequired from "../../../services/authRequired";
import axios from "axios";
import ListaCursos from "../../../components/Admin/ListaCurso";

const ListaCursosPage = () => {
    const router = useRouter();
    const user = useSelector(selectUser);
    const [cursos, setCursos] = useState([]);

    const getCursos = async () => {
        const { data } = await axios.get('/api/cursos');
        setCursos(data);
    }; 

    useEffect(() => {
        authRequired(router, user);
        getCursos();
    }, []);

    return (
        <div>
            ListaCursosPage
            <ListaCursos cursos={cursos} />
        </div>
    );
};

export default ListaCursosPage;