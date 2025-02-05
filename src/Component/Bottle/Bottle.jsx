import './Bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({bottle , handelclickCard}) => {
    const {name,img,price} =bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <button onClick={()=>handelclickCard(bottle)}>ADD Card</button>
        </div>
    );
};
Bottle.propTypes={
    bottle:PropTypes.array.isRequired,
    handelclickCard:PropTypes.func.isRequired
}

export default Bottle;