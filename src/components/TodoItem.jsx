import React from 'react';

class TodoItem extends React.Component {

    render() {
        let date = new Date(this.props.todo.created);
        return (
            <li className="todo__item">
                <p className="todo__text">
                    {this.props.todo.text}
                </p>
                <p className="todo__date">{this.props.zero(date.getHours())}:{this.props.zero(date.getMinutes())}</p>
                <button className="todo__delete" type="button" onClick={() => {this.props.deleteItem(this.props.todo.id)}}></button>
            </li>
        )
    }
};

export default TodoItem;
