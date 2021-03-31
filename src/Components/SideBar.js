import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AddProduct from './AddProduct';

const SideBar = () => {
    return (
        <div className="bg-dark col-md-3" style={{ height: '100vh' }}>
            <h1 className="text-light">
                <Link to="/">
                    <BiArrowBack />
                </Link>
                <span className="m-5 p-3">Nokshi</span>
            </h1>
            <div className="mt-5">
                <Link to="/admin/productManage">
                    <Button variant="" className="text-light" block>
                        <h6>
                            <BsFillGridFill style={{ fontSize: '25px', marginRight: '10px' }} />
                            Manage Product
                        </h6>
                    </Button>
                </Link>
                <Link to="/admin/addProduct">
                    <Button variant="" className="text-light my-3" block>
                        <h6>
                            <AiOutlinePlus style={{ fontSize: '25px', marginRight: '10px' }} />
                            Add Product
                        </h6>
                    </Button>
                </Link>

                <Button variant="" className="text-light" block>
                    <h6>
                        <FaEdit style={{ fontSize: '25px', marginRight: '10px' }} />
                        Edit Product
                    </h6>
                </Button>
            </div>
        </div>
    );
};

export default SideBar;