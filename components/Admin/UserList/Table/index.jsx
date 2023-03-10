const Table = ({ children }) => {
    return (
        <table className = "w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
            {children}
        </table>
    );
};

export default Table;