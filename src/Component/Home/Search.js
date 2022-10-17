    import React, {Component} from 'react';
    import './Search.css';
    const url = ' https://zomatoajulypi.herokuapp.com/location'
    const restUrl = 'https://zomatoajulypi.herokuapp.com/restaurant'

    class Search extends Component  {
       constructor() {
        super() 

        this.state = {
            location : '',
            restaurant : ''
        }

       }
       renderCity = (data) => {
        if(data){
            return data.map((item) => {
                    return(
                        <option value = {item.state_id} key={item.state_id}>{item.state}</option>
                    )
            })
       }
    }
    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                    return(
                        <option value = {item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                    )
            })
       }
    }
    
    handleCity = (event) => {
        let stateId = event.target.value;
         fetch(`${restUrl}?stateId=${stateId}`,{method:"Get"})
           .then((res) => res.json())
           .then((data) => {
            this.setState({restaurant:data})
           })
    }
        
        render(){
        return (
            <div id="searchContainer">
                <h2>Find Your Best Restaurants Near You</h2>
                <select className="selection" onChange = {this.handleCity}>
                    <option>----Select Your City-----</option>
                    {this.renderCity(this.state.location)}
                </select>
                <select className="selection2" >
                    <option>----Select Your Restaurant-----</option>
                    {this.renderRest(this.state.restaurant)}
                </select>
            </div>
        )
        
        }
        //api Calling when page load(Life cycle method)
        componentDidMount(){
           fetch(url,{method:"Get"})
           .then((res) => res.json())
           .then((data) => {
            this.setState({location:data})
           })
    }
}
    export default Search;