import { validacionLogin } from '../../../../services/validacionLogin';

export default async function handler(req, res) {
    req.body;
    switch (req.method) {
        case "GET":
            return res.status(200).json("Getting");
        case "POST":
            return await saveUser(req, res);
    };
};

const saveUser = async (req, res) => {
    const { email, password } = req.body;

    const data = await validacionLogin(email, password);

    if (data[0] === "Failed") return res.status(400).json(data[1].message);

    return res.status(200).json(data);
};