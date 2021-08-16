

function onSignIn(googleUser){

    let profile = googleUser.getBasicProfile()
    localStorage.setItem('id', profile.getId())
    localStorage.setItem('name', profile.getName())
    localStorage.setItem('email', profile.getEmail())
    localStorage.setItem('image', profile.getImageUrl())
    
    window.location.replace("tabata.php")
}


