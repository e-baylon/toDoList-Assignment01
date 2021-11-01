// to do page


import tagline from '../components/branding/tagline'
import link from '../components/link/link'
import brandHeader from '../components/brandingHeader/brandHeader'
import toDoItem from '../components/toDoItem/toDoItem'
import toDoItems from '../../assets/toDoItems'
import appBar from '../components/addToDo/appBar'




const toDoPage = function(){
    
    app.appendChild(brandHeader('fa-tasks', 'When life gives you the opportunity, check it off!'))
    //app.appendChild(tagline('When life gives you the opportunity, check it off!'))
    //app.appendChild(link('Click here to Continue', '/toDoPage'))
    async function fetchData(){
        const result = toDoItems


        //each item in array makes toDoItem Element
        result.forEach((element, index, array) => {
            
            
            
            //app.appendChild(toDoItem(id="aw45f25v", category="School Category", title="Social", isCompleted="true", startDate="Wednesday Septemeber 3rd", startTime="9:00am", endDate= "Wednesday Septemeber 3rd", endTime="9:00am"))
            app.appendChild(toDoItem(element.id, element.category, element.title, element.isCompleted, element.startDate, element.startTime, element.endDate, element.endTime))
            
        });

        //append appBar

        app.appendChild(appBar('+'))
        


        
    }
    //run fetching data from object array
    fetchData()

    
    

    

    return toDoPage  
    
}



export default toDoPage 