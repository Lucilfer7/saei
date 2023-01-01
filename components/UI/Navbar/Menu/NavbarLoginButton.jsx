import Link from "next/link";

const NavbarLoginButton = ({ menuMobile }) => {
    return (
        <Link href="/login">
            <a
                className='block md:py-2 pr-4 pl-3 font-semibold text-lg text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer'
                onClick={menuMobile}
            >
                Login
            </a>
        </Link>
    );
};

export default NavbarLoginButton;