import React, { useContext } from 'react';
import { userContext } from '../App';
import { Image } from 'react-bootstrap';

const AdminProfile = () => {
    const [user, setUser] = useContext(userContext)
    return (
        <div className="col-md-9 text-center bg-success">
            <Image src={user.photoURL} className="mt-5" roundedCircle />
            <br /><br />
            <h4>Admin : {user.displayName}</h4>
        </div>
    );
};

export default AdminProfile;