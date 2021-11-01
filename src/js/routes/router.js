//router to link pages


import homePage from '../pages/home';
import toDoPage from '../pages/toDoPage';
import pageNotFound from '../pages/pageNotFound';

/* 
const routes = {
    '/':homePage(),
     '/toDoPage':toDoPage(),
    '/pageNotFound':pageNotFound()
} */

/* const Router = function(pathname){
    const app = document.querySelector('#app')


    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )


    app.appendChild(routes[window.location.pathname])
} */









    //router 
     var Router = function(name, routes){
        return {
            name: name,
            routes: routes
        }
        
     
    };
    

    
    
    //router object paths
    var mainRouter = new Router('mainRouter', [
        {
            path:'/',
            name: 'home'
        },
        {
            path: '/toDoPage',
            name:'toDoPage'
        },
        {
            path:'/pageNotFound',
            name:'pageNotFound'
        }
    ]);
    
    //currentPaths
    var currentPath = window.location.pathname;
       //console.log(currentPath)
    
    
    if(currentPath === '/'){
        homePage();
    } else{
       
        if(currentPath === '/toDoPage'){
            toDoPage()
        } else{
            pageNotFound()
        }
    } 







   /* const routes = {
    '/':homePage(),
     '/toDoPage':toDoPage(),
    '/pageNotFound':pageNotFound() 
    

}  



  const Router = function(pathname){
   const app = document.querySelector('#app')
   console.log(pathname)
   console.log(window.location.origin)

   
      
  } */
   


    
    
   
  



//export {routes}
export {routes}
export default Router

