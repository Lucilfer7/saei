import { useSelector } from 'react-redux';
import { selectUser } from '../app/features/userSlice';
import HomePageAdmin from '../components/Admin/HomePageAdmin';
import HomePageAlumno from '../components/Alumno';
import HomePageUnr from '../components/Unregistered/HomePageUnr';
import HomePageDocente from '../components/Docente';
import HomePagePreceptor from '../components/Preceptor';

const HomePage = () => {
    const user = useSelector(selectUser);


    return (
        <div className='w-full h-full absolute'>
            {
                user === null
                    ? <HomePageUnr />
                    : user.user.tipo === "Administrador"
                        ? <HomePageAdmin user={user.user} />
                        : user.user.tipo === "Alumno"
                            ? <HomePageAlumno user={user.user} />
                            : user.user.tipo === 'Docente'
                                ? <HomePageDocente user={user.user} />
                                : <HomePagePreceptor user={user.user} />
            }
        </div>
    );
};

export default HomePage;