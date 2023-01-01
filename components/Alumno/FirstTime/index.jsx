import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Submit } from "../../UI/Button";
import SelectCurso from "../../UI/Select/SelectCurso";
import Form from "./Form";
import Message from "./Message";

const FirstTime = ({ user }) => {
    const [showListCurso, setShowListCurso] = useState(false);

    const [alumno, setAlumno] = useState({
        curso: '',
        user_id: user.id
    });

    const closeList = () => setShowListCurso(!showListCurso);
    const onChange = ({ target }) => {
        setShowListCurso(!showListCurso);
        setAlumno({ ...alumno, curso: target.innerText });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/alumnos', alumno);
            toast.success("Registrado!");
        } catch (error) {
            toast.error(error.response.data);
        };
    };

    return (
        <div className="absolute flex flex-col w-full h-full bg-classic-blue justify-center items-center">
            <Form onSubmit={onSubmit}>
                <Message nombre={user.nombre} />
                <SelectCurso aCurso={alumno.curso} closeList={closeList} showList={showListCurso} onChange={onChange} />
                <Submit text="listo" type='submit' />
            </Form>
        </div>
    );
};

export default FirstTime;