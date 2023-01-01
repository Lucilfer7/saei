import NavbarLoginButton from "./NavbarLoginButton";
import ProfileButton from "./ProfileButton";

const LogProf = ({ user, showOptions, showDropdown, handleOpenNavbarMenu }) => {
    return (
        <>
            {
                user === null
                    ? <NavbarLoginButton menuMobile={handleOpenNavbarMenu} />
                    : <ProfileButton
                        showOptions={showOptions}
                        showDropdown={showDropdown}
                        openNavbarMenu={handleOpenNavbarMenu}
                        user={user.user}
                    />
            }
        </>
    );
};

export default LogProf;