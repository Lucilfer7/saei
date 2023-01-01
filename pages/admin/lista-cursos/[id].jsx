import axios from 'axios';

const HomePageCurso = ({curso}) => {
    return (
        <div>
            <h1>Curso: {curso[0].curso}</h1>
        </div>
    );
};

export const getServerSideProps = async (ctx) => {
    const { data: curso } = await axios.get(`http://localhost:3000/api/cursos/${ctx.query.id}`);

    return {
        props: {
            curso
        }
    }
};

export default HomePageCurso;