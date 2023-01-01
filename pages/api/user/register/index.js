import { pool } from '../../../../config/db';
import md5 from 'md5';
import { validacionSignup } from '../../../../services/validacionSignup'

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return await saveUser(req, res);
    };
};

const saveUser = async (req, res) => {
    let contraseñaHashed;
    let direccion;
    const { nombre, apellido, dni, telefono, calle, altura, email, contraseña, contraseña_repetida } = req.body;
    console.log(md5(contraseña), contraseña);
    const result = validacionSignup(nombre, apellido, dni, telefono, calle, altura, email, contraseña, contraseña_repetida);

    if (Object.keys(result).length > 0) return res.status(400).json(result.message);

    const [data] = await pool.query("SELECT email FROM user WHERE email = ?", email);
    if (data.length > 0) return res.status(400).json("Email ya existente.")

    try {
        contraseñaHashed = md5(contraseña);
        direccion = `${calle.trim()} ${altura.trim()}`;
        await pool.query("INSERT INTO user SET ?", {
            nombre,
            apellido,
            dni,
            telefono,
            direccion,
            email,
            contraseña: contraseñaHashed,
            tipo: "Alumno",
            first_time: true
        });
        return res.status(200).json();
    } catch (error) {
        return res.status(500).json(error);
    };
};
