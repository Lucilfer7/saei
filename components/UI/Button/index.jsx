import Submit from "./Buttons/Submit";
import HamburgerMenu from "./Buttons/HamburgerMenu";
import DeleteButton from "./Buttons/DeleteButton";
import CancelButton from './Buttons/CancelButton';

const Button = ({ text, type, style, onClick, name, color }) => {
    let cName = 'px-3 py-2 rounded-lg uppercase text-white ';

    switch (style) {
        case 'random':
            // Borde de un color más oscuro, para cambiar...
            cName += `text-white uppercase font-semibold h-24 border border-red-600 shadow-lg`
    };

    return (
        <button
            className={`${cName} ${color}`}
            type={type}
            onClick={onClick}
            name={name}
        >
            {text}
        </button>
    );
};

export { Submit };
export { CancelButton };
export { HamburgerMenu };
export { DeleteButton };
export default Button;