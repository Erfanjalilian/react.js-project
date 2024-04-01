import style from"../../component/DemoForWebsit/DemoForWebsit.css"


function DemoHeader(props){
    return(
        <div>
              <div className="fatherdemosit">


<div className="containerList">



<p>{props.data.title}</p>
<div className="fatherOfimageDemo">
<img className="imageDemo" src={props.data.image} />
</div>

</div>



</div>
        </div>
    );
}

export default DemoHeader;