

import style from "../../component/BtnNumberDocumentation/BtnNumberDocumentation.css"


function BtnNumberDocumentation(props){
    return(
        <div>
            <div className="center-btn">

            <button type="button" class="btn btn-primary">{props.data.matnedokme}</button>

            </div>
        </div>
    );
}
export default BtnNumberDocumentation;