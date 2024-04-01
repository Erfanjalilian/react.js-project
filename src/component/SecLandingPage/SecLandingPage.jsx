
import style from "../../component/SecLandingPage/SecLandingPage.css"
function SecLandingPage(props){
    return(
        <div>
            <h3 className="OnvanLanding">{props.data.OnvanLanding}</h3>
            <p className="matneLanding">{props.data.matneLanding}</p>
            
            <div className="mainLanding">
                <div>
                    <button className="btn btn-primary Landina" href="">{props.data.BRNLanding1}</button>
                </div>
                <div>
                    <a className="BTNLanding2" href="">{props.data.BTNLanding2}</a>
                </div>
            </div>
            

        </div>
    )
}
export default SecLandingPage;