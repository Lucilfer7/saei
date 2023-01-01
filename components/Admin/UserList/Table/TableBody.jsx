const TableBody = ({ children }) => {
    return (
        <tbody className="overflow-y-auto">
            {children}
        </tbody>
    );
};

export default TableBody;