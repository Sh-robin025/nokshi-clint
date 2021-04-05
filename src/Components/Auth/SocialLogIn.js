import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import { handleGoogleSignIn, initialization } from './Firebase';

const SocialLogIn = () => {
    initialization()
    const [user, setUser] = useContext(userContext)
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                setUser(result);
                history.replace(from);
            })
    }

    return (
        <div className="bg-light">
            <h6 className="text-center m-3" id="or"> or</h6>
            <div className="row justify-content-center m-2">
                <Button variant="primary" block className="col-md-3 rounded-pill"
                    onClick={googleSignIn}
                > <AiFillGoogleCircle style={{ fontSize: '25px', marginRight: '50px' }} />
                    <strong> Continue with Google</strong>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogIn;