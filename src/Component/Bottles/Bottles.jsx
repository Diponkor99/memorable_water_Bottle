import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addLC, localStorageChackData, removeLC } from "../localStorage/local";
import Cards from "./Cards/Cards";



const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('Bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    const [cart, setCart] = useState([])
    const handelclickCard = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart);
        addLC(bottle.id)

    }

    // LocalStorage a data Loadeing
    useEffect(() => {
        const card = localStorageChackData();
        // console.log(bottles)
        if (bottles.length > 0) {
            const carts = []
            // console.log(card)
            for (const id of card) {
                const aitem = bottles.find(bottle => bottle.id === id)
                if (aitem) {
                    carts.push(aitem)
                }
            }
            setCart(carts)
        }
    }, [bottles]);

    // Card remove ....
    const handelclickRemoveData=(id)=>{
        const remove=cart.filter(card=> card.id !== id)
        setCart(remove)
        
        removeLC(id)

    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <Cards  cart={cart} handelclickRemoveData={handelclickRemoveData}></Cards>

            <div className="bottles_box">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelclickCard={handelclickCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;