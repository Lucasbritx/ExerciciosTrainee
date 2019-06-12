import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      homepage:true,
      operador: '',
      resultado: 0
    };


    // this.handleChange1 = this.handleChange1.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);
    this.handleOperador = this.handleOperador.bind(this);
    this.handleCalcular = this.handleCalcular.bind(this);
    this.handleVoltar = this.handleVoltar.bind(this);
  }

  handleChange1(event) {
    this.setState({number1: event.target.value}, () => {
      this.handleCalcular();
    });
  }

  handleChange2 = (event) => {
    this.setState({number2: event.target.value}, () => {
      this.handleCalcular();
    })
  }

  handleOperador(event) {
    this.setState({homepage: !this.state.homepage})
    this.setState({operador: event.target.value}) 
  }

  handleCalcular(){
    switch(this.state.operador){
      case "+":
        this.setState({resultado: (Number(this.state.number1) + Number(this.state.number2))});
        break;
      case "-":
        this.setState({resultado: (Number(this.state.number1) - Number(this.state.number2))});
        break;
      case "*":
        this.setState({resultado: (Number(this.state.number1) * Number(this.state.number2))});
        break;
      case "/":
        this.setState({resultado: (Number(this.state.number1) / Number(this.state.number2))});
        break;
      default:
        return "erro"
      }
  }

  handleVoltar(){
    this.setState({
      homepage: !this.state.homepage,
      number1: 0,
      number2: 0,
      resultado:0
    })
  }

  render() {
    if(this.state.homepage){
    return (<div>
      <button value="+" onClick={this.handleOperador}>+</button>
      <button value="-" onClick={this.handleOperador}>-</button>
      <br></br>
      <button value="/" onClick={this.handleOperador}>/</button>
      <button value="*" onClick={this.handleOperador}>*</button>
    </div>)
    }else{
    return (
      <div>
        <label>
          Number 1:
          <input type="number" value={this.state.number1} onChange={(event) => {this.handleChange1(event, 2)}} />
        </label>
        <br></br>
        <br></br>
        <label>
          Number 2:
          <input type="number" value={this.state.number2} onChange={this.handleChange2} />
        </label>
        <br></br>
        <br></br>
        <label>{this.state.resultado}</label>
        <input type="button" value="Voltar" onClick={this.handleVoltar} />
      </div>
    );}
  }
}




ReactDOM.render(
  <Calculadora />,
  document.getElementById('root')
);

