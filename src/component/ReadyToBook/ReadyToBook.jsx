
import style from "../ReadyToBook/ReadyToBook.css"

function ReadyToBook(props){
    return(
        <div>

            <h4 className="onvanReadyToBook">{props.data.paragrafReady}</h4>

            <br />

            <button className="btn btn-primary">{props.data.btnRaedy}</button>

        </div>
    )
}
export default ReadyToBook;