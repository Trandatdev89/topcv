import {useNavigate} from "react-router-dom";

function GoBack(){
    const back=useNavigate();
    const handleClick=()=>{
        back(-1);
    }
    return(
        <>
           <button style={{padding:"10px 20px",color:"#fff",backgroundColor:"#C43820",borderRadius:"8px",margin:"20px 0",border:"none"}} onClick={handleClick}>Quay lại</button>
        </>
    )
}

export default GoBack;