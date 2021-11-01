// add to do element
import makeElement from "../../utils/makeElement";

//make appBar
const appBar=  function (label="addButton"){
    const template = `<div class=
    "app-bar"><button class="addButton">${label}</button></div>`;
    //check for a valid element
    //

    const element = makeElement(template);


    return element
}
//export appBar
export default appBar