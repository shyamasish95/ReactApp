import React,{Component} from 'react';
import Todo from './todo';
import AddToDo from './addtodo';

class Todos extends Component{
    state={
        addToDoValue:"",
        todos:[
            {
                id:1,
                value:"todo 1",
                isDone:false
            },
            {
                id:2,
                value:"todo 2",
                isDone:true
            },
            {
                id:3,
                value:"todo 3",
                isDone:false
            }
        ]
    }

    getDate(){
        let d = new Date();
        let n = d.getTime();
        return n;
    }

    handleDelete = todo =>{
        const todos = this.state.todos.filter((t)=>{
            return t.id !== todo
        });
        this.setState({todos});
    }

    handleDone = todo =>{
        const todos = [...this.state.todos];
        todos.map((t)=>{
            if(t.id === todo.id){
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos});
    }

    addNewTodo = value =>{
        if(value){
            const todos = [...this.state.todos];
            todos.push({
                id:this.getTime(),
                value:value,
                isDone:false
            });
            this.setState({addToDoValue:"", todos});
        }else{
            console.log("please add todo text");
        }
    }
    render(){
        return(
            <table className="table">
                <tbody>
                    {this.state.todos.map((todo,index)=>(
                        <tr key={todo.id}>
                            <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDone={this.handleDone}></Todo>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddToDo fooAddToDo={this.addNewTodo} addToDoValue = {this.addToDoValue}></AddToDo>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Todos;