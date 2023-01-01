const Option = ({ value, onChange, name, text }) => {
    return (
        <div
            name={name}
            key={value}
            value={value}
            className="py-2 pl-3 pr-9 cursor-default border-t rounded border-gray-100 dark:border-gray-700 select-none relative  hover:bg-blue-600 active:bg-blue-700 active:text-gray-50 hover:text-white"
            onClick={onChange}
        >
            {text === null ? value : text}
        </div>
    );
};

export default Option;