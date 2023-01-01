import Select from ".";
import Option from "./Option";
import Options from './Options';
import ButtonSelect from "./ButtonSelect";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const SelectCurso = ({ closeList, showList, onChange, aCurso }) => {
    const [cursos, setCursos] = useState();

    useEffect(() => {
        getCursos();
    }, [])
    

    const getCursos = async () => {
        const { data } = await axios.get('/api/cursos');
        setCursos(data);
    }

    return (
        <Select>
            <ButtonSelect text={aCurso === '' ? 'Seleccioná tu curso...' : aCurso} closeList={closeList} />
            {
                showList
                    ? <Options name="curso">
                        {cursos.map(curso => <Option name="curso" text={curso.curso} value={curso.id_curso} onChange={onChange} />)}
                    </Options>
                    : <></>
            }
        </Select>
    );
};

export default SelectCurso;