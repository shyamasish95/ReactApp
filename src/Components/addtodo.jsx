import React,{ Component } from "react";

class AddToDo extends Component{
    state={
        defaultValue:"",
        value: this.props.addToDoValue
    }

    handleChange=(e)=>{
        this.setState({value: e.target.value});
    }

    clearInput=()=>{
        document.getElementById("todoValue").value="";
        this.setState({value:""});
    }

    addToDo=()=>{
        this.props.fooAddToDo(this.state.value);
        this.clearInput();
    }

    render(){
        return(
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="todoValue" placeholder="Todo" onChange={this.handleChange}/>
                <div className="input-group-append">
                    <button onClick={this.addToDo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}
export default AddToDo;