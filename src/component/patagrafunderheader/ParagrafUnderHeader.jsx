
import sTyle from "../patagrafunderheader/ParagrafUnderHeader.css"

function ParagrafUnderHeader(props){
    return(
        <div>
            <div className="row">

                <div className="col-md-6 col-sm-12">

                    <div className="paragraf p-3">

                    <h3>{props.data.onvan}</h3>

                    <p className="mb-5">{props.data.matneSade}</p>
                    <button className="btnOne">View Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short Iconbrtn" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
                    <button className="btnTwo">Documentation</button>
                    </div>

                </div>
               

                <div className="col-md-6 col-sm-12">
                    <img className="aks p-3" src={props.data.image} />
                </div>

            </div>
        </div>
    )
}
export default ParagrafUnderHeader