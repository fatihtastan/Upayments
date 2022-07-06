import React, { useEffect } from 'react';
import {
    Row,
    Col,
    Image
  } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getProductDetail} from "../../Redux/Action/ProductAction"



function ProductDetail ({ match, location, history }) {
    const dispatch = useDispatch();
    const {id} = useParams();
    const productDetails = useSelector((state) => state.cart.productInfo?.productDetails);
    useEffect(() => {
        dispatch(getProductDetail(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <div className="mx-5 p-4">
      <Row>
        <Col className='col col-md-5'> 
        <Image src={productDetails?.avatar}/>
        </Col>
        <Col style={{position:"relative"}} className='col col-md-7'>
            <h2 style={{ float:"left"}}>{productDetails?.name}</h2>
            <h4 style={{position:"absolute",bottom:"1rem"}}>${productDetails?.price}</h4>
        </Col>
      </Row>
      <hr className='my-4' style={{width:"80%" ,margin:"auto"}}/>
      <Row >
        <h5 style={{float:"left"}}>Description</h5>
        <p>{productDetails?.description}</p>
      </Row>
    </div>
}
export default ProductDetail;