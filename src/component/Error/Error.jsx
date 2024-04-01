
import style from "../../component/Error/Error.css"

function Error(props){
    return(
        <div>
            <div className="mainError">
                <br /><br /><br /><br /><br />

                <div className="imageError">
                    <img src={props.data.imageUrl}/>
                </div>
                <p className="matnError1">{props.data.errorMatn1}</p>
                <p className="matnError2">{props.data.errorMatn2}</p>

            </div>
        </div>
    )
}
export default Error;