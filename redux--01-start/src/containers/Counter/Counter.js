import React, { Component } from 'react';

//é uma função que retorna um componente de alta ordem
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* ctr está dentro do  mapStateToProps*/}
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractFiveCounter}  />
                <hr/>

                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>

                <ul>
                    {this.props.storeResults.map ( item => (
                        <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}> {item.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//aqui obtém o atributo em cada state de cada redux
const mapStateToProps = state => {
    // return {
    //     ctr: state.ctr.counter,
    //     storeResults: state.res.results
    // }

    return {
        ctr: state.ctr.counter,
        // ctr: state.ctr,// mas aí nesse caso passaria <CounterOutput value={this.props.ctr} /> lá no CounterOutput =>  Current Counter: {props.value.counter}
        storeResults: state.res.results
        // storeResults: state.res.results teria q fazer this.props.storeResults.results.map
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type:actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type:actionTypes.DECREMENT
        }),
        onAddFiveCounter: () => dispatch({
            type:actionTypes.ADD_5,
            val:10
        }),
        onSubtractFiveCounter: () => dispatch({
            type:actionTypes.SUBTRACT_5,
            val: 10
        }),
        onStoreResult: (result) => dispatch({
            type:actionTypes.STORE_RESULT,
            result:result
        }),
        onDeleteResult: (id) => dispatch({
            type:actionTypes.DELETE_RESULT,
            resultElementId: id
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);