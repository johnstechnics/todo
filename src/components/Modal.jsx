import React from 'react';

class Modal extends React.Component {

    render() {
        return (
            <div className={'modal ' + this.props.modal}>
                <button className="todo__yes__button" onClick={() => {this.props.clearAll(); this.props.modalClose()}}>Yes</button>
                <button className="todo__no__button" onClick={this.props.modalClose}>No</button>
            </div>
        )
    }
};

export default Modal;
