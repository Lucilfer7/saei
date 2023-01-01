const Form = ({ children, onSubmit }) => {
    return (
        <form
            className="transition-all duration-200 ease-in w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 h-full p-3 pt-9 bg-white flex flex-col items-center dark:bg-gray-900"
            onSubmit={onSubmit}
        >
            {children}
        </form>
    );
};

export default Form;