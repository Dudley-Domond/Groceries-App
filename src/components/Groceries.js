import React,{Component} from 'react'
import App from '../App';

class Groceries extends Component{ //
    constructor(){
        super()
        this.state ={ // Temporary data stored here
            item:'',
            units:'',
            quantity:'',
            isPurchased:''
        }
    }

saveInfo = addItems=>{ 
    this.setState({[addItems.target.id]:addItems.target.value}) // In charge of making changing of temporary state above
    console.log(this.saveInfo)
    
}
submitButton=event=>{
    event.preventDefault()
    console.log(this.state) 
    this.props.getList(this.state)  //Sends event info to getlist prop on app.js 
}

    render(){
        return(
            <div>
                <h2 id="title">Grocery App</h2>
                <form onSubmit={this.submitButton}>
                    <label id="itemlabel" htmlFor='item' >Item:</label>
                        <input id='item' placeholder='Enter Item'
                        onChange={this.saveInfo}
                        value={this.state.item}/>
                    
                    <label id="unitslabel" htmlFor='units'>Units:</label>
                        <input id="units" placeholder='Enter Units'
                        onChange={this.saveInfo}
                        value={this.state.units}/>
                        
                    
                    <label id="quantitylabel" htmlFor='quantity'>Quantity:</label>
                        <input id='quantity' placeholder='Enter Quantity'
                        onChange={this.saveInfo}
                        value={this.state.quantity}/>
                        
                    
                    <button type="submit">Add item</button>
                </form>
            </div>
        )
    }
}
export default Groceries 