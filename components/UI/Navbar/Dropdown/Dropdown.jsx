const Dropdown = ({ children, showDropdown }) => {
    return (
        <>
            <div
                className="transition-all duration-200 ease-in mt-1 fixed z-50 w-44 font-normal bg-white rounded shadow-md divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 border border-gray-200 dark:border-gray-500"
            >
                <ul className="text-sm text-gray-700">
                    {children}
                </ul>
            </div>
            <div className="fixed inset-0 z-40 cursor-default" onClick={showDropdown}></div>
        </>

    );
};

export default Dropdown;