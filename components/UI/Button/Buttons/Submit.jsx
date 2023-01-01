const Submit = ({ text, type, onClick, name }) => {
    return (
        <button
            className='px-3 w-full py-2 rounded-lg uppercase text-white my-3 bg-blue-400 hover:bg-blue-500 active:bg-blue-700 outline-none'
            type={type}
            onClick={onClick}
            name={name}
        >
            {text}
        </button>
    );
};

export default Submit;