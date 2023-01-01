import { DeleteButton, Submit } from "../../../UI/Button";

const Warning = ({ user, warning, showWarning, handleDelete }) => {
    return (
        <>
            {
                warning
                    ? <>
                        <div className="fixed top-0 right-0 left-0 inset-y-1/4 inset-x-2/5 sm:inset-y-1/3 md:inset-x-1/4 md:inset-y-1/2 lg:inset-x-5/6 lg:inset-y-1/2 xl:inset-x-1/3  z-50 flex py-2 items-center justify-center">
                            <div className="absolute bg-gray-100 py-5 w-3/4 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg">
                                <h1 className="text-center uppercase font-bold text-gray-900 dark:text-gray-100 ">
                                    ¿Desea eliminar a {user.apellido} {user.nombre}?
                                </h1>
                                <div className="flex flex-row justify-around border-t px-3 border-gray-300 dark:border-gray-600 mt-5 pt-3">
                                    <DeleteButton type="button" text="Sí, eliminar" onClick={handleDelete} />
                                    <div className="mx-4"></div>
                                    <Submit type="button" text="No, mantenerlo" onClick={showWarning} />
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={showWarning}></div>
                    </>
                    : <></>
            }
        </>
    );
};

export default Warning;