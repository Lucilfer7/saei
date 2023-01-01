import { pool } from '../config/db';
import md5 from 'md5';
const reEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const mensajeVacio = (campo) => {
    switch (campo.slice(-1)) {
        case 'a':
            return `La ${campo} no puede estar vacía.`;
        default:
            return `El ${campo} no puede estar vacío.`;
    };
};

export const validacionLogin = async (email, password) => {
    const errors = {};
    const string = [];
    let data;

    // ! VALIDAR EMAIL Y CONTRASEÑA
    if (email == '' && password === '') {
        string.push("Rellene los campos.");
    };
    if (email === '' || password === '') {
        string.push(mensajeVacio(email === '' ? 'email' : 'contraseña'));
    };
    if (reEmail.test(email) === false) {
        string.push("El email ingresado no es válido.");
    };

    // ! OBTENGO AL USUARIO Y COMPARO LA CONTRASEÑA
    const [userFinded] = await pool.query('SELECT * FROM user WHERE email = ?', email);
    if (userFinded.length > 0) {
        const hashed_password = md5(password);
        if (userFinded[0].contraseña == hashed_password) {

        }
        else {
            string.push("Contraseña incorrecta.");
        };
    }
    else {
        string.push(`El usuario no fue encontrado.`);
    };

    if (string.length !== 0) {
        errors.message = string[0];
        data = [
            "Failed",
            errors
        ];
    }
    else {
        data = [
            "OK",
            userFinded[0]
        ];
    };

    return data;
};