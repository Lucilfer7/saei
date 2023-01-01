import { useState } from 'react';
import axios from 'axios';

// * UI imports
import { Submit } from '../UI/Button';
import { Username, Password } from '../UI/Input';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const SignupForm = ({ switchForm }) => {
    // * HOOKS
    const router = useRouter();
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        telefono: "",
        calle: "",
        altura: "",
        email: "",
        contraseña: "",
        contraseña_repetida: ""
    });

    // * METHODS
    const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/user/register', user);
            toast.success("Cuenta creada!");
            switchForm();
        } catch (error) {
            toast.error(error.response.data);
            console.log(error);
        };
    };

    return (
        <form
            className='w-full h-full flex flex-col md:px-8 lg:px-12 xl:px-16 2xl:px-20'
            onSubmit={handleSubmit}
        >
            <div className='flex flex-row w-full justify-between'>
                <div className='w-[48%]'>
                    <Username
                        name="nombre"
                        value={user.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        type="text"
                    />
                </div>
                <div className='w-[48%]'>
                    <Username
                        name="apellido"
                        value={user.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        type="text"
                    />
                </div>
            </div>
            <Username
                name="dni"
                value={user.dni}
                onChange={handleChange}
                placeholder="DNI"
                type="text"
            />
            <div className='flex flex-row w-full justify-between'>
                <div className='w-[78%]'>
                    <Username
                        name="calle"
                        value={user.calle}
                        onChange={handleChange}
                        placeholder="Calle"
                        type="text"
                    />
                </div>
                <div className='w-[18%]'>
                    <Username
                        name="altura"
                        value={user.altura}
                        onChange={handleChange}
                        placeholder="Altura"
                        type="text"
                    />
                </div>
            </div>
            <Username
                name="telefono"
                value={user.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                type="text"
            />
            <Username
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                type="text"
            />
            <Password
                name="contraseña"
                value={user.contraseña}
                onChange={handleChange}
                placeholder="Contraseña"
                type="password"
            />
            <Password
                name="contraseña_repetida"
                value={user.contraseña_repetida}
                onChange={handleChange}
                placeholder="Repita la contraseña"
                type="password"
            />

            <Submit text="Registrarse" type="submit" />
            <h1>
                ¿Ya tienes cuenta? <span onClick={switchForm} className='text-blue-400 hover:underline hover:text-blue-500 cursor-pointer'>Inicia sesión</span>
            </h1>
        </form>
    );
};

export default SignupForm;