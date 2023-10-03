import React from "react";


type props = {
    message: String
}

type MyState = {
    count: number
}

export default class StateClass extends React.Component<props, MyState>{

    state: MyState = {
        count: 0
    }

    render(){
        return(
            <div className="flex-col">
                <h5>Componente de classe com estado definido</h5>
                <span className="yellow">{this.state.count} </span>
                <button onClick={()=> this.setState((state)=> ({count: state.count + 1}))}>INCREMENTAR</button>
            </div>
        )
    }
}

