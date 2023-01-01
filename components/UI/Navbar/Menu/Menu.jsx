const Menu = ({ openNavbarMenu, children }) => {
    return (
        <ul
            className={`${openNavbarMenu ? 'top-14' : 'top-[-400px]'} md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-200 ease-in dark:bg-gray-900 border-b border-gray-700 md:border-transparent`}
        >
            {children}
        </ul>
    );
};

export default Menu;