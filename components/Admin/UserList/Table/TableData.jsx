const TableData = ({ children }) => {
    return (
        <td
            scope="row"
            className="py-4 px-6"
        >
            {children}
        </td>
    );
};

export default TableData;