import React, { useContext } from 'react';
import { Container, Jumbotron, Button, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { orderListContext } from '../App';

const ShowOrder = ({ data }) => {
    const { title, brand, description, image, price, quantity, _id } = data.orderPd
    const history = useHistory()
    const [orderList, setOrderList] = useContext(orderListContext)

    const deleteOrder = (id) => {
        fetch('https://nokshi.herokuapp.com//deleteOrder/' + id, {
            method: 'DELETE'
        })
            .then(result => {
                if (result.status !== 200) {
                    alert("try again pls.")
                } else {
                    const remainProduct = orderList.filter(pd => pd._id !== id)
                    alert("delete success")
                    setOrderList(remainProduct)
                }
            })
    }

    return (
        <div>
            <Jumbotron >
                <Image src={image} style={{ height: '150px', cursor: 'pointer' }}
                    onClick={() => history.push(`/checkOut/${_id}`)} />
                <h5>{brand}</h5>
                <h1>{title}</h1>
                <p><strong>Ordered on : {data.date}</strong> <br />{description} <br /> Quantity : {quantity} <br /> Price : $ {price * quantity + 40} (include shipping charge $ 40)</p>
                <p>
                    <Button variant="primary"
                        onClick={() => deleteOrder(data._id)}>Delete Order</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default ShowOrder;