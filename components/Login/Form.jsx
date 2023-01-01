import { useState } from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'

const Form = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = () => setIsLogin(!isLogin);

    return (
        <>
            <h1 className='text-center text-2xl font-semibold mb-6'>{isLogin ? "Log In" : "Sign Up"}</h1>
            {
                isLogin
                    ? <LoginForm switchForm={switchForm} />
                    : <SignupForm switchForm={switchForm} />
            }
        </>
    );
};

export default Form;