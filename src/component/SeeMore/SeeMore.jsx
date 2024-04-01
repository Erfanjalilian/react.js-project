
import style from "../SeeMore/SeeMore.css"
function SeeMore(props){
    return(
        <div>
            <div className="mainSeeMore">
            <div className="containerMore">
                <div><img src="" alt="" /></div>
                <h3 className="onvaneseemor">{props.data.onvanSeeMore}</h3>
                <p className="matneseemor">{props.data.matneSeeMore}</p>
            </div>
            
            <hr />
            <div className="containerMore">
                <div className="flexSeeMore">
                    <div><p className="text-primary">See more</p></div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short text-primary" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default SeeMore;