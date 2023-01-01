import { pool } from '../../../../config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getDocente(req, res);
    };
};

const getDocente = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM user WHERE tipo = "Docente"`);

        return res.status(500).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};