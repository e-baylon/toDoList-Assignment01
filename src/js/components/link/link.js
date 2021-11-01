//make element import then use it to make link element

import makeElement from "../../utils/makeElement";
import Router from "../../routes/router";
import homePage from '../../pages/home';
import toDoPage from '../../pages/toDoPage';
import pageNotFound from '../../pages/pageNotFound';




const onRequestNewPage = function(e){
    e.preventDefault()
    //prevent default loading

   
    var returnObject = Router(e.currentTarget.dataset.path.substring(1) ,e.currentTarget.dataset.path)

       if(returnObject.name == "toDoPage"){
        const app = document.querySelector('#app')
        //remove children of app clear page
        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }



            toDoPage();
            window.location.origin
            
        
            
       }else{
           //remove children of app clear page
        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }

           

            homePage();
            window.location.origin
       }


    
    return false

    
}
//make link elements
const link =  function (label="ui-link", path='/', className="link-button"){
    const template = `<a href="${path}" class="${className}" data-path="${path}">${label}</a>`;
    //check for a valid element
    //

    const element = makeElement(template);
    element.addEventListener('click', onRequestNewPage)


    return element
}

export default link