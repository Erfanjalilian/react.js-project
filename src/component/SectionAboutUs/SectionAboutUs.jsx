import style from "../SectionAboutUs/SectionAboutUs.css"

function SectionAboutUs(props){
    return(
        <div>
            <div className="mainAboutUs">
                <div className="containerAboutUs">
                    <h3 className="onvaneAbout">{props.data.onvaneAbout}</h3>
                    <p className="matneAbout">{props.data.matneAbout}</p>
                </div>
                
            </div>
        </div>
    )
}
export default SectionAboutUs;