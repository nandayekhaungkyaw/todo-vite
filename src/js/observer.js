import { calculateList, doneCheck } from "./list.js";
import { listGroup } from "./selector.js";


const CallBackObserver=()=>{
    

    const doObserver=()=>{
        console.log("you chang in listGroup");
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