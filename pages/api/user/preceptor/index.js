import { pool } from "../../../../config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getPreceptores(req, res);
    };
};

const getPreceptores = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM user WHERE tipo = "Preceptor"`);
        
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error.message);
    };
};