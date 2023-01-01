import { useState } from "react";
import Modal from "./Modal";
import Row from "./Table/Row";
import TableHeader from "./Table/TableHeader";
import TableData from './Table/TableData';

const ItemUser = ({ user }) => {
    const [modalOpen, setModalOpen] = useState();
    const openModal = () => setModalOpen(!modalOpen);
    
    const id = user.id;

    return (
        <Row userID={id}>
            <TableHeader scope="row">
                {user.apellido}
            </TableHeader>
            <TableData>
                {user.nombre}
            </TableData>
            <TableData>
                {user.email}
            </TableData>
            <TableData>
                <a
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    onClick={openModal}
                >
                    Edit
                </a>
            </TableData>
            {modalOpen ? <Modal user={user} openModal={openModal} /> : <></>}
        </Row>
    );
};

export default ItemUser;