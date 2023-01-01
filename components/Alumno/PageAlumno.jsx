import { useRouter } from "next/router";

const PageAlumno = ({ user }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/user/mis-datos');
    };
    return (
        <div className="absolute flex flex-col w-full h-full bg-gray-100 dark:bg-gray-800">
            <div className="text-center w-full h-1/4 bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700 border-gray-300 shadow-sm flex justify-center items-center">
                <h1 className="font-bold text-3xl">{user.apellido.toUpperCase()}, {user.nombre}</h1>
            </div>
            <div>
                <button onClick={handleClick}>Mis datos</button>
            </div>
        </div>
    );
};

export default PageAlumno;