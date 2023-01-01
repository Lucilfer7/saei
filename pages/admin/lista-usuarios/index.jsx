import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/features/userSlice';
import authRequired from '../../../services/authRequired';
import ListaUsuarios from '../../../components/Admin/UserList/ListaUsuarios';

const ListaUsuariosPage = () => {
    // * HOOKS
    const [users, setUsers] = useState([]);
    const router = useRouter();
    const user = useSelector(selectUser);

    const getUsers = async () => {
        const { data } = await axios.get('/api/user');
        setUsers(data);
    }

    useEffect(() => {
        authRequired(router, user);

        setTimeout(() => {
            getUsers();
        }, 200);
    }, []);


    return (
        <div className='flex flex-col w-full h-full'>
            <h1 className='ml-3 text-xl font-semibold'>Lista de Usuarios</h1>
            <div className='xl:w-1/2 mx-auto w-full h-5/6 transition-all duration-200 ease-in bg-white dark:bg-gray-900'>
                <ListaUsuarios users={users} />
            </div>
        </div>
    );
};

export default ListaUsuariosPage;