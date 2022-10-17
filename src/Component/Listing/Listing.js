import React, {Component} from 'react';
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './ListingDisplay'

const url = "https://zomatoajulypi.herokuapp.com/restaurant"

class Listing extends Component {

    constructor(props) {
        super(props)

        this.state = {
            restaurant : ""
        }
    }
    render() {
        return (
            <>
            <div className="row">
                <div id = "mainListing">
                    <div id = "filter">
                        <centre>
                            <h3>Filters</h3>
                        </centre>
                        <hr/>
                    </div>
                </div>
                <ListingDisplay ListData={this.state.restaurant}/>
            </div>
            </>
        )
    }
    // APi Calling through Axios
    componentDidMount() {
        let mealId = this.props.match.params.id?this.props.match.params.id:1;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${url}?mealtype_id = ${mealId}`)
        .then((res) => {this.setState({restaurant:res.data})})
    }
   

    
}
export default Listing; 