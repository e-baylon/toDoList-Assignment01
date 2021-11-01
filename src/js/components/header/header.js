//make element import then use it to make header element
import makeElement from "../../utils/makeElement";

const header =  function (title="uiHeader"){
    const template = `<h1 class="title">${title}</h1>`;
    //check for a valid element
    //

    const element = makeElement(template);


    return element
}

//export header

export default header