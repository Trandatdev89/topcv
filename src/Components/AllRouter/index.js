import {useRoutes} from "react-router-dom"
import { router } from "../../Router";


function AllRouter(){
    const AllRoute=useRoutes(router);
    return(
        <>     
          {AllRoute}
        </>
    )
}

export default AllRouter;