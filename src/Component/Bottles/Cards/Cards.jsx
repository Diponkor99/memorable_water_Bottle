import Card from "../Card/Card";
import './Cards.css';
import PropTypes from 'prop-types';



const Cards = ({cart ,handelclickRemoveData}) => {
    return (
        <div>
            <h3>Card:{cart.length} </h3>

           <div className="cards">
           {
              cart.map(card=><Card card={card} key={card.id} handelclickRemoveData={handelclickRemoveData}></Card>)  
            }
           </div>
        </div>
    );
};

Cards.propTypes={
    cart:PropTypes.array.isRequired,
    handelclickRemoveData:PropTypes.func.isRequired
}


export default Cards;