const reNumeral = /^[0-9]*$/;
const reNames = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
const reEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const rePhoneInternational = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

const mensajeVacio = (campo) => {
    if (campo === 'dirección') {
        return 'La dirección no puede estar vacía';
    }
    switch (campo.slice(-1)) {
        case 'a':
            return `La ${campo} no puede estar vacía.`;
        default:
            return `El ${campo} no puede estar vacío.`;
    };
};

export const validacionEditNewPassword = (nombre, apellido, dni, email, telefono, direccion, tipo, contraseña) => {
    const errors = {};
    const string = [];

    // ! VALIDACIÓN DE LOS CAMPOS
    if (nombre === '' && apellido === '' && email === '' && dni === '' && direccion === '' && telefono === '' && contraseña === '') {
        string.push("Rellene los campos.");
    };
    if (nombre === '') {
        string.push(mensajeVacio("nombre"));
    };
    if (nombre.length < 3) {
        string.push("Nombre muy corto.")
    };
    if (reNames.test(nombre) === false) {
        string.push("El nombre no puede tener caracteres especiales.");
    };
    if (apellido === '') {
        string.push(mensajeVacio("apellido"));
    };
    if (apellido.length < 3) {
        string.push("Apellido muy corto.")
    };
    if (reNames.test(apellido) === false) {
        string.push("El apellido no puede tener caracteres especiales.");
    };
    if (dni === '') {
        string.push(mensajeVacio("DNI"));
    };
    if (reNumeral.test(dni) === false) {
        string.push('El DNI solo puede ser numérico.')
    };
    if (dni < 1 || dni.length < 7) {
        string.push('Ese DNI no existe.');
    };
    /*
    if (direccion === '') {
        string.push(mensajeVacio("dirección"));
    };
    if (direccion.length < 6) {
        string.push("Nombre de calle muy corto");
    }
    */
    if (telefono === '') {
        string.push(mensajeVacio("teléfono"));
    };
    if (telefono.length < 8) {
        string.push("El número de teléfono es muy corto.");
    };
    if (rePhoneInternational.test(telefono) === false) {
        string.push("El número de teléfono ingresado es inválido.");
    };
    if (email === '') {
        string.push(mensajeVacio("mail"));
    };
    if (reEmail.test(email) === false) {
        string.push("El email ingresado no es válido.");
    };
    if (contraseña === '') {
        string.push(mensajeVacio("contraseña"));
    };
    if (contraseña.length < 8) {
        string.push("La contraseña es muy corta. Prueba una de 8 caractéres.");
    };
    if (rePassword.test(contraseña) === false) {
        string.push("Solo se admiten caracteres alfanuméricos. La contraseña debe tener al menos: 8 caracteres, 1 mayúscula, 1 minúscula y 1 número.");
    };

    if (string.length !== 0) {
        errors.message = string[0];
    };

    return errors;
};

export const validacionEditSamePassword = (nombre, apellido, dni, email, telefono, direccion, tipo) => {
    const errors = {};
    const string = [];

    // ! VALIDACIÓN DE LOS CAMPOS
    if (nombre === '' && apellido === '' && email === '' && dni === '' && direccion === '' && telefono === '') {
        string.push("Rellene los campos.");
    };
    if (nombre === '') {
        string.push(mensajeVacio("nombre"));
    };
    if (nombre.length < 3) {
        string.push("Nombre muy corto.")
    };
    if (reNames.test(nombre) === false) {
        string.push("El nombre no puede tener caracteres especiales.");
    };
    if (apellido === '') {
        string.push(mensajeVacio("apellido"));
    };
    if (apellido.length < 3) {
        string.push("Apellido muy corto.")
    };
    if (reNames.test(apellido) === false) {
        string.push("El apellido no puede tener caracteres especiales.");
    };
    if (dni === '') {
        string.push(mensajeVacio("DNI"));
    };
    if (reNumeral.test(dni) === false) {
        string.push('El DNI solo puede ser numérico.')
    };
    if (dni < 1 || dni.length < 7) {
        string.push('Ese DNI no existe.');
    };
    /*
    ?if (direccion === '') {
    ?    string.push(mensajeVacio("dirección"));
    ?};
    ?if (direccion.length < 6) {
    ?    string.push("Nombre de calle muy corto");
    ?}
    */
    if (telefono === '') {
        string.push(mensajeVacio("teléfono"));
    };
    if (telefono.length < 8) {
        string.push("El número de teléfono es muy corto.");
    };
    if (rePhoneInternational.test(telefono) === false) {
        string.push("El número de teléfono ingresado es inválido.");
    };
    if (email === '') {
        string.push(mensajeVacio("mail"));
    };
    if (reEmail.test(email) === false) {
        string.push("El email ingresado no es válido.");
    };
    if (string.length !== 0) {
        errors.message = string[0];
    };

    return errors;
};