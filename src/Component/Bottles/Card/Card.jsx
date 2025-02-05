import './Card.css'
import PropTypes from 'prop-types';

const Card = ({card ,handelclickRemoveData }) => {

    return (
        <div className="Card">
            <img src={card.img} alt="" />
            <button onClick={()=>handelclickRemoveData(card.id)} >remove</button>
        </div>
    );
};
Card.propTypes={
    card:PropTypes.array.isRequired,
    handelclickRemoveData:PropTypes.func.isRequired,
}

export default Card;