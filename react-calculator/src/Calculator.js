import React, { Component } from 'react'
import './App.css'



class Calculator extends Component {

    constructor (props) {
        super()
        this.state = {
          num1: '',
          num2: '',
          sum: '',
          operator: '+'
        }
    }

    setNum = (e, num) => {
        this.setState({ [num]: parseInt(e.target.value)});
    }

    findSum = (e, num) => {
        this.setState({
            sum: this.state.num1 + this.state.num2
        })
    }


    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={() => this.findSum()}>=</button>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator