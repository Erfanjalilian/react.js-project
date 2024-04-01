
import style from "../../component/Onfooter/Onfooter.css"

function Onfooter(props){
    return(

        <div>
            <div className="container g">

                <p className="adad">{props.data.Number}</p>

                <p className="onvaneadad">{props.data.title1}</p>

                <p className="matneadad">{props.data.title2}</p>

            </div>
        </div>
    );
}
export default Onfooter;