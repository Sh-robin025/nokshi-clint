import React, { useContext } from 'react';
import { } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const ManagerTable = ({ data }) => {

    const handleDelete = () => {
        const id = data._id;

        fetch('https://nokshi.herokuapp.com/delete/' + id, {
            method: 'DELETE'
        })
            .then(result => {
                window.location.reload();
                if (result.status !== 200) {
                    alert("try again pls.")
                }
            })
    }
    return (
            <tr className="p-5">
                <td>
                    <h6>{data.title}</h6>
                </td>
                <td className="">
                    <h6>{data.brand}</h6>
                </td>
                <td className="text-center">
                    <h6>$ {data.price}</h6>
                </td>
                <td style={{ fontSize: '25px' }} className="text-center">
                    <FaEdit className="mr-3"
                        style={{ cursor: 'pointer' }} />
                    <AiFillDelete className="ml-3"
                        style={{ cursor: 'pointer' }}
                        onClick={handleDelete} />
                </td>
            </tr>
    );
};

export default ManagerTable;