import Form from '../../components/Login/Form';

const LoginPage = () => {
    return (
        <div className='flex flex-row'>
            <div className='bg-violetly hidden h-screen md:flex flex-col justify-center items-center md:w-7/12'>
                <img src="/logo.png" width={600} height={600} alt="EEST N°1" />
            </div>
            <div className='flex flex-col w-full h-screen xl:w-5/12 px-10 mx-auto justify-center items-center'>
                <Form />
            </div>
        </div>
    );
};

export default LoginPage;