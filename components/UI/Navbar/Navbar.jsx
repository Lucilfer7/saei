import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../app/features/userSlice';

import Logo from './Logo';
import { HamburgerMenu } from '../Button';
import Menu from './Menu/Menu';
import ItemMenu from './Menu/ItemMenu';
import LogProf from './Menu/LogProf';

const Navbar = () => {
    // * HOOKS
    const user = useSelector(selectUser);
    const [showOptions, setShowOptions] = useState(false);
    const [openNavbarMenu, setOpenNavbarMenu] = useState(false);

    // * METHODS
    const handleOpenNavbarMenu = (state) => {
        setOpenNavbarMenu(state);
        if (showOptions === true) setShowOptions(false);
    };

    const showDropdown = () => setShowOptions(!showOptions);

    return (
        <nav
            className='transition-all duration-200 ease-in fixed w-full z-20 top-0 left-0 border-b border-gray-200
            px-2 sm:px-4 py-2.5 bg-white  dark:text-white dark:bg-gray-900  dark:border-gray-700'
        >
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Logo image='/logo.png' brand='E.E.S.T. N°1' onClick={() => handleOpenNavbarMenu(false)} />
                <HamburgerMenu onClick={() => handleOpenNavbarMenu(!openNavbarMenu)} />
                <Menu openNavbarMenu={openNavbarMenu}>
                    <ItemMenu>
                        <LogProf
                            user={user}
                            showOptions={showOptions}
                            showDropdown={showDropdown}
                            handleOpenNavbarMenu={() => handleOpenNavbarMenu(!openNavbarMenu)}
                        />
                    </ItemMenu>
                </Menu>
            </div>
        </nav>
    );
};

export default Navbar;