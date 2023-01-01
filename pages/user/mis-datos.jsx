import { useSelector } from 'react-redux';
import { selectUser } from '../../app/features/userSlice';

const DatosPage = () => {
    const { user } = useSelector(selectUser);
    console.log(user);
    return (
        <div className='text-xl p-7'>
            <h1><span className='font-bold underline'>Usuario:</span> {user.apellido}, {user.nombre}</h1>
            <h1><span className='font-bold underline'>DNI:</span> {user.dni}</h1>
            <h1><span className='font-bold underline'>Teléfono:</span> {user.telefono}</h1>
        </div>
    );
};

export default DatosPage;