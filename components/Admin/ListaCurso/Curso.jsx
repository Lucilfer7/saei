import Link from "next/link";

const Curso = ({ curso }) => {
    return (
        <li key={curso.curso_id}>
            <Link href={`/admin/lista-cursos/${curso.curso_id}`}>
                <a>{curso.curso}</a>
            </Link>
        </li>
    );
};

export default Curso