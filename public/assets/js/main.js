$(document).on('click', '.video-info .title', function(){
    $(this).parent('.video-info').toggleClass('active');
});

$(document).on('click', '.chat-info .piture-title', function(){
    $(this).parent('.chat-info').toggleClass('active');
});

function activeFunc(Class, NavigationActiveClass){
    let className = ['Home',"myProfile", "Chat","HelpSupport"]
    let navigationActive = ['homeActive', 'profileActive', 'chatActive','HelpActive']
    for(let i = 0; i < className.length;i++){
        if(Class === className[i]){
            document.getElementById(className[i]).classList.toggle('active') 
            document.getElementById('adminPanel').classList.remove('active')
            if(NavigationActiveClass !== undefined) {
                for(let key in navigationActive){
                    if(NavigationActiveClass === navigationActive[key]) {
                        document.getElementById(navigationActive[key]).classList.toggle('active') 
                        document.getElementById('Delivery').classList.remove('active')
                        document.getElementById('Planning').classList.remove('active')
                        document.getElementById('Editing').classList.remove('active')
                        document.getElementById('Production').classList.remove('active')
                    }else{
                        document.getElementById(navigationActive[key]).classList.remove('active') 
                    }
                }
            }     
        }else{
            document.getElementById(className[i]).classList.remove('active') 
        }
    }
}


// Menu Active

function menuActive(){
    document.getElementById('adminPanel').classList.toggle('active')
}

// Circle Class Active
function circleClassActive(Class){
    for(let i = 0; i < Class.length;i++){
        document.getElementById(Class[i]).classList.toggle('active')
        document.getElementById('homeActive').classList.remove('active') 
    }
}