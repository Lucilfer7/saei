import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>SAEI</title>
            </Head>

            <Navbar />
            <main className='transition-all duration-200 ease-in overflow-hidden min-h-screen w-full relative pt-12 md:pt-16 bg-gray-50 dark:bg-gray-900 dark:text-white'>
                <div className='absolute w-full h-full flex flex-col pt-3 md:pt-0'>
                    {children}
                </div>
            </main>
            <Footer />
            
            <ToastContainer />
        </>
    );
};

export default Layout;