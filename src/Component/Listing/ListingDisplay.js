import React from 'react';
import {Link} from 'react-router-dom'


const ListingDisplay = (props) => {

    const renderData = ( {ListData} ) => {
        if (ListData){
            if (ListData.length>0){
                return ListData.map((item) =>{
                    return (
                        <div id="item" key = {item.restaurant_id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb} className="Image" alt=''/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to ={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                        <div className="city_name">{item.address} </div>
                                        <div className="city_name">{item.rating_text} </div> 
                                        <div className="city_name">Rs. {item.cost} </div> <br/>
                                        <div className="Laberdiv">
                                            <span className="label label-primary">
                                                    {item.mealTypes[0].mealtype_name}
                                                </span> &nbsp;
                                                <span className="label label-success">
                                                    {item.mealTypes[1].mealtype_name}
                                                </span>     
                                             </div>
                                             <span className="label label-info">
                                                    {item.cuisines[0].cuisine_name}
                                                </span> &nbsp;
                                                <span className="label label-danger">
                                                    {item.cuisines[1].cuisine_name}
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }else {
                return (
                    <div>
                        <h2>No Data for the Filter</h2>
                    </div>
                )
            }
        }else {
            return (
                <div>
                    <img src='https://www.vecteezy.com/vector-art/1826199-progress-loading-bar-buffering-download-upload-and-loading-icon' alt=''/>
                </div>
            )
        }
    }



    return (
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;

