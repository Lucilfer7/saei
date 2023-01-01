import { pool } from '../../../../config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getEspecialidades(req, res);
    };
};

const getEspecialidades = async (req, res) => {
    const [resultIPP] = await countEspecialidad("I.P.P.");
    const [resultMMO] = await countEspecialidad("M.M.O.");
    const [resultTQ] = await countEspecialidad("T.Q.");

    const data = {
        IPP: resultIPP[0].IPP,
        MMO: resultMMO[0].MMO,
        TQ: resultTQ[0].TQ,
    };

    try {
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json();
    };
};

const countEspecialidad = async (especialidad) => {
    return await pool.query(`SELECT COUNT(curso.curso) AS ${especialidad.replace(/\./g, '')} FROM alumnos INNER JOIN curso ON curso.curso_id = alumnos.curso_id WHERE curso.curso LIKE "%${especialidad}%"`);
};
