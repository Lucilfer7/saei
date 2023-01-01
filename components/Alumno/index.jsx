import FirstTime from "./FirstTime";
import PageAlumno from "./PageAlumno.jsx";

const HomePageAlumno = ({ user }) => {
    return (
        <>
            {
                user.first_time === 1
                    ? <FirstTime user={user} />
                    : <PageAlumno user={user} />
            }
        </>
    );
};

export default HomePageAlumno;