// main home page

import header from '../components/header/header'
import tagline from '../components/branding/tagline'
import logo from '../components/branding/logo'
import link from '../components/link/link'




const homePage = function(){


    app.appendChild(logo('fa-tasks')),
    app.appendChild(header('Ultimate Tasks App')),
    app.appendChild(tagline('When life gives you the opportunity, check it off!'))
    app.appendChild(link('Click here to Continue', '/toDoPage'))

    console.log('home')


    return homePage
}






//homePage
export default homePage 