const ButtonSelect = ({ text, name, closeList }) => {
    return (
        <button type='button'
            name={name}
            className=' transition-all duration-200 ease-in flex items-center w-full text-left py-4 px-2 rounded-lg outline-none shadow-md border border-gray-300   justify-between bg-white dark:bg-gray-900 hover:bg-gray-50 focus:border-pink-500 dark:hover:bg-gray-700 active:bg-gray-100 active:shadow-lg active:border-gray-500 dark:border-gray-700 dark:active:bg-gray-800 dark:focus:border-blue-500'
            onClick={closeList}
        >
            <h1 className="text-black dark:text-white transition-all duration-200 ease-in">{text}</h1>
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </button>
    );
};

export default ButtonSelect;