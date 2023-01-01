import React from 'react'
import Select from '.';
import ButtonSelect from './ButtonSelect';
import Option from './Option';
import Options from './Options';

const SelectRoles = ({ closeList, showList, tipo, onChange }) => {
    const roles = ["Administrador", "Docente", "Preceptor", "Alumno"]
    return (
        <Select>
            <ButtonSelect text={tipo} closeList={closeList} />
            {
                showList ?
                    <Options name="tipo">
                        {roles.map(rol => <Option name="tipo" text={rol} value={rol} onChange={onChange} />)}
                    </Options>
                    : <></>
            }
        </Select>
    );
};

export default SelectRoles;