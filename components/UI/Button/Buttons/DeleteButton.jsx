const DeleteButton = ({ text, type, onClick, name }) => {
    return (
        <button
            className='px-3 w-full py-2 rounded-lg uppercase text-white my-3 bg-red-400 hover:bg-red-500 active:bg-red-600 outline-none'
            type={type}
            onClick={onClick}
            name={name}
        >
            {text}
        </button>
    );
};

export default DeleteButton;