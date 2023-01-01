import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";
import authRequired from "../../../services/authRequired";

import PreceptoresList from "../../../components/Admin/PreceptoresList";
import axios from "axios";

const PreceptoresPage = () => {
    const [preceptores, setPreceptores] = useState([]);
    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
        authRequired(router, user);
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios.get('/api/user/preceptor');

        setPreceptores(data);
    }; 

    return (
        <div className="w-full h-full absolute">
            Preceptores
            <PreceptoresList preceptores={preceptores} />
        </div>
    );
};

export default PreceptoresPage; 