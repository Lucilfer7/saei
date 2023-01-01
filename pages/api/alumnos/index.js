import { pool } from "../../../config/db";

export default async function handler(req, res) {
    // Depende el método que reciba la API, ejecuta diferentes peticiones.
    switch (req.method) {
        case 'GET':
            return await getAlumnos(req, res);
        case 'POST':
            return await saveAlumno(req, res);
    };
};

const getAlumnos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM datos_alumnos');
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const saveAlumno = async (req, res) => {
    const { curso, user_id } = req.body;

    try {
        if (curso === '') throw 'Seleccione un curso';
        
        const [xd] = await pool.query('SELECT curso_id FROM curso WHERE curso = ?', curso);
        const cursoCorrecto = xd[0].curso_id;
        
        await pool.query('INSERT INTO alumnos SET ?', {
            user_id,
            curso_id: cursoCorrecto
        });

        await pool.query('UPDATE user SET first_time = 0 WHERE id = ?', user_id);

        return res.status(200).json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
};