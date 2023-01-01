const PreceptoresList = ({ preceptores }) => {
    return (
        <div>
            {
                preceptores.length > 0 === true
                    ? preceptores.map(preceptor => (
                        <h1 key={preceptor.id}> {preceptor.apellido.toUpperCase()}, {preceptor.nombre}</h1>
                    ))
                    : <h1>No hay preceptores</h1>
            }
        </div>
    );
};

export default PreceptoresList