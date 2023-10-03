import SonComponent from "./SonComponent"


const FatherComponent = () => {
    return(
        <div>
            <h5 className="bg-red" >
                Componente Pai!
            </h5>
            <SonComponent/>
        </div>
    )
}

export default FatherComponent