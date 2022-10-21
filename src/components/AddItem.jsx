import React from 'react';

class AddItem extends React.Component {

    render() {
        return (
            <div className="todo__addItem">
                <input 
                    className="todo__addItem__input" 
                    type="text" onChange={this.props.handlerChange} 
                    value={this.props.text} 
                />
            </div>
        )
    }
};

export default AddItem;
