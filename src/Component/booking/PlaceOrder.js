import React, {Component}from 'react';
import './PlaceOrder.css';




class PlaceOrder extends Component {
        constructor(props) {
            super(props);
            this.state = {
                id : Math.floor(Math.random() *100000),
                hotel_name : this.props.match.params.restName,
                name : '',
                email : '',
                cost : 0,
                phone : '',
                address : 'hno 25',
                menuItem : ''
            }
        }

        handleChange = (event) => {
            this.setState({[event.target.name]:event.target.value})
        }


    render() {
        return (
            <>
                <div className="panel- panel-primary">
                    <div className="panel-heading">
                        <h3>Your Order for {this.state.hotel_name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group col-ms-6" >
                            <label for = "fname">Name</label>
                            <input id = "fname" name="name" type="text"className="form-control"
                             value= {this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-ms-6" >
                            <label for = "email">email</label>
                            <input id = "email" name="name" type="text"className="form-control"
                             value= {this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-ms-6" >
                            <label for = "phone">phone</label>
                            <input id = "phone" name="name" type="text"className="form-control"
                             value= {this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-ms-6" >
                            <label for = "address">address</label>
                            <input id = "address" name="name" type="text"className="form-control"
                             value= {this.state.address} onChange={this.handleChange}/>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }

}

export default PlaceOrder;