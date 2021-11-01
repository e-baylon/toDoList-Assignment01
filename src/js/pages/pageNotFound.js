//page not found error 404

import header from '../components/header/header'
import tagline from '../components/branding/tagline'
import logo from '../components/branding/logo'
import link from '../components/link/link'



const pageNotFound = function(){


    app.appendChild(logo('fa-tasks')),
    app.appendChild(header('Page Not Found :(')),
    app.appendChild(tagline('404! This is not the way!'))
    app.appendChild(link('Please Click Here to Return', '/'))

    return pageNotFound
}


//page not founnd
export default pageNotFound