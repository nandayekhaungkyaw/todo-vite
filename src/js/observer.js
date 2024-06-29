import { calculateList, doneCheck } from "./list.js";
import { listGroup } from "./selector.js";


const CallBackObserver=()=>{
    

    const doObserver=()=>{
       
        doneCheck()
        calculateList();

    }
    const config = { attributes: true, childList: true, subtree: true };

const observer=new MutationObserver(doObserver)
observer.observe(listGroup,config)

    // mutation observer events
    //  do function 
    // Watch listgroup 
    // observe option 
      
}




export default CallBackObserver