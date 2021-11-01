//make element import then use it to make logo element

import makeElement from "../../utils/makeElement";

const tagline =  function (tagline="uiTagline"){
    const template = `<p class="tagline">${tagline}</p>`;
    //check for a valid element
    //

    const element = makeElement(template);


    return element
}

//export tagline

export default tagline