import { pool } from '../../../config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getCurso(req, res);
    };
};

const getCurso = async (req, res) => {
    const { id } = req.query;
    try {
        const [result] = await pool.query("SELECT * FROM curso WHERE curso_id = ?", id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};