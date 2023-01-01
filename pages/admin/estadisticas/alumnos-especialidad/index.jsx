import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../app/features/userSlice";
import authRequired from "../../../../services/authRequired";
import axios from "axios";
import PieChart from "../../../../components/UI/PieChart";

const HomePageAlumnos_Especialidad = () => {
    const router = useRouter();
    const [alumnos, setAlumnos] = useState({});
    const user = useSelector(selectUser);
    useEffect(() => {
        if (user === null || user.user.tipo !== 'Administrador') {
            authRequired(router, user);
        }
        
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios.get('/api/alumnos/especialidades');
        setAlumnos(data);
    }
    return (
        <div
            className="transition-all duration-200 ease-in w-full h-full absolute p-4
            bg-gray-50 text-gray-900 dark:text-gray-50 dark:bg-gray-900"
        >
            <h1>¿Cuántos alumnos hay por especialidad?</h1>
            <PieChart IPP={alumnos.IPP} MMO={alumnos.MMO} TQ={alumnos.TQ} />
        </div>
    );
};

export default HomePageAlumnos_Especialidad;