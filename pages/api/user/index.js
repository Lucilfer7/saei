import { pool } from '../../../config/db';
import { validacionEditNewPassword, validacionEditSamePassword } from '../../../services/validacionEdit';
import md5 from 'md5';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getUsers(req, res);
        case 'PUT':
            return await editUser(req, res);
        case 'POST': // actúa como delete
            return await deleteUser(req, res);
    }
}

const getUsers = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM user");
    return res.status(200).json(result);
};

const editUser = async (req, res) => {
    let { contraseña } = req.body;
    const { id, nombre, apellido, email, telefono, dni, direccion, tipo } = req.body;
    const [result] = await pool.query("SELECT contraseña FROM user WHERE id = ?", id);

    const oldPassword = result[0].contraseña
    let errors;

    if (oldPassword === contraseña) {
        errors = validacionEditSamePassword(nombre, apellido, dni, email, telefono, direccion, tipo);

        if (Object.keys(errors).length > 0) return res.status(400).json(errors.message);
    } else {
        errors = validacionEditNewPassword(nombre, apellido, dni, email, telefono, direccion, tipo, contraseña);

        if (Object.keys(errors).length > 0) return res.status(400).json(errors.message);
        contraseña = md5(contraseña);
    };


    try {

        await pool.query("UPDATE user SET nombre = ?, apellido = ?, email = ?, telefono = ?, dni = ?, direccion = ?, contraseña = ?, tipo = ? WHERE id = ?",
            [nombre, apellido, email, telefono, dni, direccion, contraseña, tipo, id]);

        if (tipo === 'Docente') {
            await pool.query("INSERT INTO docente SET user_id = ?", id);
        }
        res.status(200).json("Actualización exitosa!");
    } catch (error) {
        res.status(500).json(error);
    };
};

const deleteUser = async (req, res) => {
    const { id, tipo } = req.body;

    try {
        tipo === 'Alumno' ? await pool.query("DELETE FROM alumnos WHERE user_id = ?", id) : null

        await pool.query("DELETE FROM user WHERE id = ?", id);

        return res.status(200).json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
};
const validacionContraseña = (oldPassword, contraseña, errors) => {
    if (oldPassword === contraseña) {
        errors = validacionEditSamePassword(nombre, apellido, dni, email, telefono, direccion, tipo);

        if (Object.keys(errors).length > 0) return res.status(400).json(errors.message);
    } else {
        errors = validacionEditNewPassword(nombre, apellido, dni, email, telefono, direccion, tipo, contraseña);

        if (Object.keys(errors).length > 0) return res.status(400).json(errors.message);
        contraseña = md5(contraseña);
    };
}