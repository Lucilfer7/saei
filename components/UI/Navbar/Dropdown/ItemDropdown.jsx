const ItemDropdown = ({ children, onClick }) => {
    
    return (
        <li className='transition-all duration-200 ease-in w-full block hover:bg-blue-100 dark:hover:bg-gray-600 border-b dark:text-white border-gray-200 dark:border-gray-700 dark:hover:text-white'>
            <button className="w-full text-left block py-2 px-4" onClick={onClick}>{children}
            </button>
        </li>
    );
};

export default ItemDropdown;
