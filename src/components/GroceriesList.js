import React, {Component} from 'react'; 

class GroceriesList extends Component{

    constructor(){
        super()
    }


    render(){
        return (
            <ul id="list">
                {this.props.getGroceries.map((listItems,index) => {       // DISPLAYS LIST
                    return <div key={index}> Item: {listItems.item} Units: {listItems.units} Quantity: {listItems.quantity}
                    </div>
                }
                )}
            </ul>
        )
    }
}

export default GroceriesList;