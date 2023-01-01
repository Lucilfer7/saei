import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../app/features/userSlice';
import { useRouter } from 'next/router';

// * UI Imports
import { Username, Password } from '../UI/Input';
import { Submit } from '../UI/Button';
import { toast } from 'react-toastify';

const LoginForm = ({ switchForm }) => {
    // * HOOKS
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const router = useRouter();

    // * METHODS
    const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/api/user/login', user);

            toast.success("Sesión Iniciada!");
            dispatch(
                login({
                    user: data[1],
                    loggedIn: true
                })
            );
            router.push('/');
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        };
    };

    return (
        <form
            className='flex flex-col w-full h-full px-10'
            onSubmit={handleSubmit}
        >
            <Username
                placeholder="Email"
                type="text"
                onChange={handleChange}
                value={user.email}
                name="email"
            />
            <Password
                placeholder="Contraseña"
                type="password"
                onChange={handleChange}
                value={user.password}
                name="password"
            />
            <Submit type="submit" text="Iniciar sesión" />

            <h1>¿No tienes cuenta? <span onClick={switchForm} className='text-blue-400 hover:underline hover:text-blue-500 cursor-pointer'>Regístrese</span></h1>
        </form>
    );
};

export default LoginForm;