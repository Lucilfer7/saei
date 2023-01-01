import ItemUser from "./ItemUser";
import Table from "./Table";
import TableHead from "./Table/TableHead";
import Row from './Table/Row';
import TableHeader from "./Table/TableHeader";
import TableBody from './Table/TableBody';

const ListaUsuarios = ({ users }) => {
    return (
        <div className="flex flex-col justify-center items-center relative h-full w-full">
            <div className="transition-all w-full h-full duration-200 ease-in overflow-x-auto relative border border-gray-200 dark:border-gray-700 shadow-md sm:rounded-lg bg-white dark:bg-gray-800 max-h-screen">
                {
                    users.length > 0
                        ? <Table>
                            <TableHead>
                                <Row isHead={true}>
                                    <TableHeader scope="col">
                                        Apellido
                                    </TableHeader>
                                    <TableHeader scope="col">
                                        Nombre
                                    </TableHeader>
                                    <TableHeader scope="col">
                                        Email
                                    </TableHeader>
                                    <TableHeader scope="col">
                                        Actions
                                    </TableHeader>
                                </Row>
                            </TableHead>
                            <TableBody>
                                {
                                    users.map(user => <ItemUser user={user} />)
                                }
                            </TableBody>
                        </Table>
                        : <></>
                }
            </div>
        </div>
    );
};

export default ListaUsuarios;