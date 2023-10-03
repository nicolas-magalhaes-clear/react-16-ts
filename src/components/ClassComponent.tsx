import React from "react"

interface props{
    message: String
}



export default class ClassComponent extends React.Component<props>{

    render(){
        return(
            <div>
                <h4>Componente de classe criado</h4>
                <h5>{this.props.message}</h5>
            </div>
        )
    }

}