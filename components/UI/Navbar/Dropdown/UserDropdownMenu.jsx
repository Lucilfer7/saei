import ItemDropdown from "./ItemDropdown";
import Dropdown from './Dropdown';

import { useTheme } from "next-themes";
import { useDispatch } from 'react-redux';
import { logout } from '../../../../app/features/userSlice';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const UserDropdownMenu = ({ showOptions, showDropdown, openNavbarMenu }) => {
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        currentTheme === 'dark' ? setTheme('light') : setTheme('dark');
    };

    const dispatch = useDispatch();
    const router = useRouter();

    const logOut = (e) => {
        e.preventDefault();

        dispatch(logout());
        showDropdown();
        openNavbarMenu(false);
        router.push('/');
        toast.info("Sesión cerrada");
    };

    return (
        <>
            {
                showOptions
                    ? <>
                        <Dropdown showDropdown={showDropdown}>
                            <ItemDropdown onClick={renderThemeChanger}>
                                Cambiar tema
                            </ItemDropdown>
                            <ItemDropdown onClick={logOut}>
                                Cerrar sesión
                            </ItemDropdown>
                        </Dropdown>
                    </>
                    : <></>
            }
        </>
    );
};

export default UserDropdownMenu; 