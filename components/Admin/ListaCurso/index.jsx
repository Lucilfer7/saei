import Curso from "./Curso"
import axios from "axios";

const ListaCursos = ({ cursos }) => {
    return (
        <>
            {
                cursos.length > 0
                    ? <ul>
                        { 
                            cursos.map(cursoItem => <Curso curso={cursoItem} />)
                        }
                    </ul>
                    : <h1>No hay cursos</h1>
            }
        </>
    )
}

export default ListaCursos;