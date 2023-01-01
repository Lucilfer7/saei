import UserDropdownMenu from '../Dropdown/UserDropdownMenu';

const ProfileButton = ({ showOptions, showDropdown, openNavbarMenu, user }) => {
    return (
        <>
            <button
                className='pl-3 dark:text-white hover:text-blue-400 active:text-blue-600 focus:text-blue-600'
                onClick={showDropdown}
            >
                {user.apellido.toUpperCase()}, {user.nombre}
            </button>
            <UserDropdownMenu showOptions={showOptions} showDropdown={showDropdown} openNavbarMenu={openNavbarMenu} />
        </>
    );
};

export default ProfileButton;