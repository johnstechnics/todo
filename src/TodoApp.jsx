import React from 'react';
import './assets/css/reset.css';
import './assets/css/main.css';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import AddItem from './components/AddItem';
import Buttons from './components/Buttons';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: [],
            text: '',
            id: 1,
            modal: 'closed',
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
    };

    handlerChange(e) {
        this.setState({ text: e.target.value });
    };

    addItem() {
        let newitem = {
            created: new Date(),
            text: this.state.text,
            id: this.state.id,
        };
        if (this.state.text) {
            this.setState((state) => ({
                text: '',
                id: state.id + 1,
                todolist: state.todolist.concat([newitem]),
            }),
            () => {localStorage.setItem('todoList', JSON.stringify(this.state.todolist));
                localStorage.setItem('id', this.state.id);
            });
        };
    };

    deleteItem(id) {
        let itemList = this.state.todolist.filter((item) => item.id !== id);
        this.setState({todolist: itemList},
        () => {localStorage.setItem('todoList', JSON.stringify(this.state.todolist));
            localStorage.setItem('id', this.state.id);
        });
    };

    clearAll() {
        this.setState({todolist: [], id: 1}, 
            () => {localStorage.setItem('todoList', JSON.stringify(this.state.todolist));
            localStorage.setItem('id', this.state.id);
        });
    };

    zero(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return n;
        }
    };

    modalOpen() {
        if(this.state.todolist.length > 0) {
            this.setState({modal: 'opened'});
        };
    };

    modalClose() {
        this.setState({modal: 'closed'});
    };

    componentDidMount() {
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        let id = +localStorage.getItem('id');
        if (!todoList) {
            return;
        };
        this.setState({todolist: todoList, id: id});
    };

    render() {
        let noItems;
        if(this.state.todolist.length === 0) {
            noItems = 'No items';
        };
        return (
            <div className="todoapp">
                <Header />
                <main className="main">
                    <div className="container todo__container">
                        <AddItem 
                            handlerChange={this.handlerChange} 
                            text={this.state.text} 
                        />
                        <Buttons 
                            addItem={this.addItem} 
                            modalOpen={this.modalOpen} 
                            modalClose={this.modalClose} 
                            clearAll={this.clearAll} 
                            modal={this.state.modal} 
                        />
                        <ul className="todo__list">
                            {this.state.todolist.map((todo) =>
                                <TodoItem 
                                    zero={this.zero} 
                                    deleteItem={this.deleteItem} 
                                    todo={todo} 
                                    key={todo.id} 
                                />
                            )}
                            <p className="noItems">{noItems}</p>
                        </ul>
                    </div>
                </main>
            </div>
        )
    };
};

export default TodoApp;
