const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}

showMenu('nav-toggle', 'navbar', 'body-pd')

const linkColor = document.querySelectorAll('.nav-link')
function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.addEventListener('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))



document.getElementById("profile").addEventListener("click", function(){
    document.getElementsByClassName("profile-details")[0].classList.add("active-profile");
});
document.getElementById("notification").addEventListener("click", function(){
    document.getElementsByClassName("profile-details")[0].classList.remove("active-profile");
}); 
document.getElementById("notification").addEventListener("click", function(){
    document.getElementsByClassName("notification-details")[0].classList.add("active-notification");
});
document.getElementById("profile").addEventListener("click", function(){
    document.getElementsByClassName("notification-details")[0].classList.remove("active-notification");
}); 