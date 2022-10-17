import React, {Component} from 'react';
import "./Quick.css";
import Quick from "./Quick.js"

const url = 'https://zomatoajulypi.herokuapp.com/quicksearch'

class QuickComponent extends Component {
                constructor() {
                    super()
                    this.state = {
                        mealType : ''
                    }
                }
                render() {
                    return (
                        <div className='container quickContainer'>
                            <h2>Quick Search</h2>
                            <h4>Discover Restaurants By Meal</h4>
                            <Quick mealDisplay = {this.state.mealType}/>
                        </div>
                    )
                }

                componentDidMount() {
                    fetch(url, {method: 'GET'})
                    .then((res) => res.json())
                    .then((data) =>{
                        this.setState({mealType:data})
                    })
                }
}
export default QuickComponent;