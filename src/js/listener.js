import {
  deletAllHandler,
  doneTaskAllHandler,
  listGroupControl,
  taskAddHandler,
  taskInputHandler,
} from "./handler.js";
import { deletAll, doneTaskAll, inputBtn, inputTask, listGroup } from "./selector.js";

const Listeners = () => {
  inputBtn.addEventListener("click", taskAddHandler);

  inputTask.addEventListener(
    "keyup",

    taskInputHandler
  );

  listGroup.addEventListener("click", listGroupControl);
  deletAll.addEventListener("click", deletAllHandler);
  doneTaskAll.addEventListener("click", doneTaskAllHandler);
};
export default Listeners;
