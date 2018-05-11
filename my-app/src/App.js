import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //property name, state manage inside the component, only on class ... extends Component
  state = {
    persons: [
      {id:'1', name: 'Ats', age:44},
      {id:'2', name: 'Cau', age:41},
      {id:'3', name: 'Jvbs', age:11}
    ],
    showPersons:false
  }

  switchNameHandlerNoParams = () => {
    // console.log('Clicked');
    //DONT DO THIS: this.state.persons[0].name="ALESSANDRO"
    this.setState({
      persons: [
        {name: 'Alessandro', age:44},
        {name: 'Cau', age:41},
        {name: 'Jvbs', age:11}
      ]
    });
  }

  switchNameHandler = (novoNome) => {
    // console.log('Clicked');
    //DONT DO THIS: this.state.persons[0].name="ALESSANDRO"
    this.setState({
      persons: [
        {name: novoNome, age:44},
        {name: 'Cau', age:41},
        {name: 'Jvbs', age:11}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Ale', age:44},
        {name: event.target.value, age:41},
        {name: 'Jvbs', age:11}
      ]
    });
  }

  //a saga para atualizar um atributo de um objeto num array
  nameChangeHandler2 = (event, id) => {
    //recupera o cara pelo índice
    const personIndex = this.state.persons.findIndex (p => {
      return p.id === id;
    });

    //dessa forma, não manipula o objeto original
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [
      ...this.state.persons
    ];

    //updated the person
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  tooglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersons = (personIndex) => {
    // const persons_ = this.state.persons;
    // ou
    // const persons_ = this.state.persons.slice();
    // ou
    const persons_ = [...this.state.persons];
    persons_.splice(personIndex, 1);
    this.setState({persons: persons_});
  }
  
  render() {
    let persons = null;
  
    // pecorrendo a lista com PERSON
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person 
              click={() => this.deletePersons (index)}
              changed={(event) => this.nameChangeHandler2 (event, person.id)}
              name={person.name} 
              key={person.id}
              age={person.age}/>  
          })}
        </div>
      )
    }

    // inline styles, uma variável normal para depois ser associado ao atributo style de um componente html.
    const style= {
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <h1> Testing the fuck REACT.. REACT TO WHAT, MF ????</h1>
        <p> This is really working!!! </p>
        {/* <Person></Person> ou */}
        
        {/* Sem Parâmetros */}
        <p> <button style={style} onClick={this.switchNameHandlerNoParams}>Switch Name Sem Params</button> </p>

        <p> <button onClick={this.switchNameHandler.bind(this, "ALESSANDRO...")}>Switch Name Sem Params</button> </p>

        {/* Outra sintaxe ==> anonymous function */}
        <p> <button onClick={() => this.switchNameHandler(" SANSAN ")}>Switch anonymous</button> </p>

        <p> <button onClick={this.tooglePersons}>Toogle Persons</button> </p>
        
        { /* 
          JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

          When creating components, you have the choice between two different ways:

          Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
          class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } } 
          We'll of course dive into the difference throughout this course, you can already note that you should use 1) as often as possible though. It's the best-practice.
      */}

      {
        /* 
        Como o componente Person tem um evento onChange para o input text, senão colocar um props changed para cada objeto Person, dá um warning na tela:
        Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. 
        This will render a read-only field. 
        If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
        */
      }
        { persons }

      {
        /* 
        UMA FORMA DE MOSTRAR O TOOGLE
        */
      }
        {/* {
          this.state.showPersons ?
            <div>
              <p> <strong>OUTRA FORMA de VERIFICAÇÃO</strong> </p>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "ALESSANDRO 2 ...")}
                changed={this.nameChangeHandler}><span> Profissão: Professora </span></Person>
              
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
                changed={this.nameChangeHandler}/>
              
              
              </div>
          : null
        } */}

        {/* <Person name="Alessandro" age="44"/>
              <Person name="Cau" age="41"><span> Profissão: Professora </span></Person>
              <Person name="JV" age="11"/> */}
      </div>
    );

    // return React.createElement('div',  null, 'h1', 'Oi, estou aqui!! React element!!');//como terceiro argumento pode ter vários caros separados por vírgulas

    //criando elemento dentro de elemento
    return React.createElement('div',  null,  React.createElement('h1', 'className:App', 'Oi, estou aqui!! React element!!'));//como terceiro argumento pode ter vários caros separados por vírgulas
    //entendendo a importância da compilação do código acima e porque usamos JSX acimaS
  }
}

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">ALESSANDRO TESTANDO THE FUCK React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p> */}

export default App;
