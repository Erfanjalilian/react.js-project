import style from "../LadingPage/LandingPage.css"


function HeaderExample(props){
    return(
        <div>

<div className="Landing">
    <br /><br /><br /><br />

<div>
    <span className="DEMOS">{props.data.Demoss}</span>
</div>
<br />

<p className="OnvanLanding">{props.data.LandingPagess}</p>

<div className="containerlead">

<p className="lead">{props.data.whens}</p>
</div>

</div>


        </div>
    );
}
export default HeaderExample;