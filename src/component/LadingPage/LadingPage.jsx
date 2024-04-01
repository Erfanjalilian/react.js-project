

import style from "../LadingPage/LandingPage.css"
function LandingPage(props){
    return(
        <div>

            <div className="Landing">

                <div>
                    <span className="DEMOS">{props.data.Demos}</span>
                </div>
                <br />

                <p className="OnvanLanding">{props.data.LandingPages}</p>

                <div className="containerlead">

                <p className="lead">{props.data.when}</p>
                </div>

            </div>
            
        </div>
    )
}
export default LandingPage;
