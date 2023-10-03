interface props{
    title: String,
    subtitle?: String
}

const ParameterComponent = (props : props) => {
    return(
        <div>
            <h4>{props.title}</h4>
            {props.subtitle ? (<h5>{props.subtitle}</h5>) : (null)}
        </div>
    )
}

export default ParameterComponent