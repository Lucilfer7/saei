import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";
import authRequired from "../../../services/authRequired";

const EstadisticasPage = () => {
    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
        authRequired(router, user);
    }, []);

    return (
        <div className="transition-all duration-200 ease-in w-full h-full absolute text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900">
            <h1 className="pt-4 pl-3 text-2xl font-semibold">Estadísticas</h1>
            <button onClick={() => router.push('/admin/estadisticas/alumnos-especialidad')}>Ir a alumnos-especialidad</button>
        </div>
    );
};

export default EstadisticasPage;