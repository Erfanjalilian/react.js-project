import style from "../../component/BetweenHeaderAndFooter/BetweenHeaderAndFooter.css"

function BetweenHeaderAndFooter(props){
    return(
        <div>
            <h4 className="onvanbeetween">{props.data.onvanbeetween1}</h4>

            <p className="tozihatbetween">{props.data.tozihat1}</p>

            <p className="tozihatbetween">{props.data.tozihat2}</p>

            <p className="tozihatbetween">{props.data.tozihat3}</p>

            <span className="betweenicon">

      

            </span>

            <span className="onvanbeetween">{props.data.tozihat4}</span>

            <p className="tozihatbetween">{props.data.tozihat5}</p>

            <p className="tozihatbetween">{props.data.tozihat6}</p>

            <p className="tozihatbetween">{props.data.tozihat7}</p>

            <div className="boxparagraf">
                <h4 className="onvanbeetween">{props.data.onvanbeetween3}</h4>
                <p className="tozihatbetween">{props.data.tozihat8}</p>
            </div>

            <hr />

            <span className="onvanbeetween">{props.data.onvanbeetween4}</span>

            <span className="tozihatbetween">{props.data.tozihat9}</span>

            <p className="tozihatbetween">{props.data.tozihat10}</p>

            <p className="tozihatbetween">{props.data.tozihat11}</p>

            <p className="tozihatbetween">{props.data.tozihat12}</p>

            <div className="boxparagraf">
                <h4 className="onvanbeetween">{props.data.onvanbeetween5}</h4>
                <p className="tozihatbetween">{props.data.tozihat13}</p>
            </div>

            <hr />

            <h4 className="onvanbeetween">{props.data.onvanbeetween6}</h4>

            <p className="tozihatbetween">{props.data.tozihat1}</p>

            <p className="tozihatbetween">{props.data.tozihat2}</p>

        </div>
    )
}
export default BetweenHeaderAndFooter;