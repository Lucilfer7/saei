const Options = ({ children, name }) => {
    return (
        <div
            name={name}
            className='dark:bg-gray-900 absolute z-10 mt-1 w-full dark:border-gray-700 bg-white border border-gray-100 shadow-lg max-h-56 rounded-md pb-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
        >
            {children}
        </div>
    );
};

export default Options;