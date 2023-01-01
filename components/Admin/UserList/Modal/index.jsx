import { useState } from "react";
import axios from "axios";
import SelectRoles from "../../../UI/Select/SelectRoles";
import { toast } from "react-toastify";
import Input from '../../../UI/Input/Input';
import { CancelButton, DeleteButton, Submit } from "../../../UI/Button";
import Warning from "./Warning";

const Modal = ({ user, openModal }) => {
    // * HOOKS
    const [usuario, setUsuario] = useState(user);
    const [showListTipo, setShowListTipo] = useState(false);
    const [warning, setWarning] = useState();
    // * METHODS
    const handleShow = () => setShowListTipo(!showListTipo);

    const onChange = ({ target: { name, value } }) => setUsuario({ ...usuario, [name]: value });

    const handleChangeSelect = ({ target }) => {
        handleShow();
        setUsuario({ ...usuario, tipo: target.innerText });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const { data } = await axios.put('/api/user', usuario);
            toast.success(data);
            openModal();
        } catch (error) {
            toast.error(error.response.data);
        };
    };

    const showWarning = () => setWarning(!warning);

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            // !
            await axios.post('/api/user', usuario); 
            showWarning();
            openModal();
            toast.success("Usuario eliminado");
        } catch (error) {
            toast.error(error.response.data)
        };
    };

    return (
        <>
            <td className="fixed top-0 right-0 left-0 sm:inset-y-1/4 md:inset-y-1/2 lg:inset-x-5/6 lg:inset-y-1/2 xl:inset-x-1/3  z-50 flex py-2 items-center justify-center">
                <div className='relative w-full max-w-2xl h-full md:h-auto'>
                    <form
                        className='ease-in transition-all duration-200 relative bg-white rounded-lg shadow border border-gray-200 dark:border-gray-700 dark:bg-gray-900'
                        onSubmit={handleSubmit}
                    >
                        <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-700'>
                            <h1 className='text-xl font-semibold text-gray-900 dark:text-white'>Editar usuario</h1>
                            <CancelButton openModal={openModal} />
                        </div>
                        <div className="px-3 space-y-3 sm:space-y-5">
                            <div className="grid pt-5 grid-cols-6 gap-5">
                                <div className="col-span-6 sm:col-span-3">
                                    <Input value={usuario.nombre}
                                        onChange={onChange}
                                        name="nombre"
                                        placeholder="Nombre"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <Input value={usuario.apellido}
                                        onChange={onChange}
                                        name="apellido"
                                        placeholder="Apellido"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <Input
                                        value={usuario.email}
                                        onChange={onChange}
                                        name="email"
                                        placeholder="Email"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <Input
                                        value={usuario.dni}
                                        onChange={onChange}
                                        name="dni"
                                        placeholder="DNI"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <Input
                                        value={usuario.contraseña}
                                        onChange={onChange}
                                        name="contraseña"
                                        placeholder="Contraseña"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <Input
                                        value={usuario.telefono}
                                        onChange={onChange}
                                        name="telefono"
                                        placeholder="Teléfono"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <SelectRoles showList={showListTipo} closeList={handleShow} tipo={usuario.tipo} onChange={handleChangeSelect} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-3 p-3 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <Submit type="submit" text="Guardar todos los cambios" />
                            <DeleteButton type="button" text="Eliminar usuario" onClick={showWarning} />
                        </div>
                    </form>
                    <Warning user={user} warning={warning} showWarning={showWarning} handleDelete={handleDelete} />
                </div>
            </td>
            <td onClick={openModal} className="opacity-25 fixed inset-0 z-40 bg-black"></td>
        </>
    );
};

export default Modal;