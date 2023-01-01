const Row = ({ children, userID, isHead }) => {
    return (
        <tr
            key={userID}
            className={`${isHead ? "" : "transition-all duration-200 bg-white border-b hover:bg-blue-100 active:bg-blue-200 dark:bg-gray-800 dark:border-gray-700"}`}
        >
            {children}
        </tr>
    )
}

export default Row;