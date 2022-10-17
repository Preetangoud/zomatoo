import React from 'react';
import './Quick.css';
import {Link} from 'react-router-dom'

const Quick = (props) => {
    const listMeal = ({mealDisplay}) => {
        if (mealDisplay){
            return mealDisplay.map((item) =>{
                return (
                    <Link to = {`/Listing/${item.mealtype_id}`} key = {item._id}>
                       <div className='details'>
                    <div className='item'>
                        <img src={item.meal_image} alt=''/>
                    </div>
                    <div className='names'>
                        <h3>{item.mealtype}</h3>
                        <h5>{item.content}</h5>
                    </div>
                </div>
                    </Link>
                )
            })
        }
    }
    return (
            <div className='Container2'>
                {listMeal(props)}
            </div>
    )
}
export default Quick;