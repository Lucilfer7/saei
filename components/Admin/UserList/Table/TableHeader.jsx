const TableHeader = ({ children, scope }) => {
    return (
        <th
            scope={scope}
            className={`${scope === 'row' ? 'py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase' : 'py-3 px-6'}`}
        >
            {children}
        </th>
    )
}

export default TableHeader;