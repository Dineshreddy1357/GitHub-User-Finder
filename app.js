//when you are into ES6 modules and which are'nt supported in the browser yet, you'll have to use something like WEB PACK along with BABLE to transport all your code to be able to have modular file

//Instantiate GitHub Class
const github = new GitHub

// Instantiate UI Class
const ui = new UI

//Search input

const searchUser = document.getElementById("searchUser")
//Search Input event listener

searchUser.addEventListener('keyup', (e) => {
    
    //Get input text
    const userText = e.target.value
    if(userText !== '') //if text is not empty, then we will make a http call
    {
        //this will be done by GitHub Js file
        //make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Show alert
                ui.showAlert('User not found','alert alert-danger')
            }
            else{
                // console.log(data)
                //Show Profile // we'll show profile using UI class
                ui.showProfile(data.profile)
                console.log('app')
                ui.showRepos(data.repos)
            }
        })
    }
    else // clear profile on screen, if userText is empty, you can do this with help of UI class
    {
            ui.clearProfile()
    }
    
})