import { pool } from '../../../config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getCursos(req, res);
    }
}

const getCursos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM curso');
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message)
    };
};