import React from 'react';
import Modal from './Modal';

class Buttons extends React.Component {

    render() {
        return (
            <div className="buttons">
                <button 
                    className="todo__addItem__button" 
                    type="button" 
                    onClick={this.props.addItem}
                >
                    Add item
                </button>
                <div className="buttons__confirm">
                    <button 
                        className="todo__clear__button" 
                        onClick={this.props.modalOpen}
                    >
                        Clear All
                    </button>
                    <Modal modal={this.props.modal} modalClose={this.props.modalClose} clearAll={this.props.clearAll} />
                </div>
                
            </div>
        )
    }
};

export default Buttons;
