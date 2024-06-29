import { useSelector } from "react-redux"
import { selectData } from "./ScannerSlice"
export default function Downloadfile(){
    let downlaoadurl = useSelector(selectData);
    return(
        <div className="text-center" id="downloadPage">
            <h2><a href = {downlaoadurl}>Download</a></h2>
        </div>
    )
}