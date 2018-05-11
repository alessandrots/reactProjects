import React from 'react';
import './Person.css'

const person = (props) => {
    //props is the properties from this components
    //quando usando class-based components, it's this.props

    // return <p> <strong>testando o retorno desse jsx e tenho  {Math.floor(Math.random() * 44)} de idade.</strong> </p>

    //props.children traz os filhos dentro de um componente html

    return ( 
        <div className="Person">
            <p onClick={props.click}> <strong>Eu sou o {props.name} e tenho {props.age} de idade.</strong> </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;