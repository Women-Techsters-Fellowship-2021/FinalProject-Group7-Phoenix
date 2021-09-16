document.getElementById("upload-btn").addEventListener("click", function(){
    document.getElementsByClassName("request")[0].classList.add("active-request");
});


document.getElementById("cancel-btn").addEventListener("click", function(){
    document.getElementsByClassName("request")[0].classList.remove("active-request");
});
document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementsByClassName("request")[0].classList.remove("active-request");
});

document.getElementById("submit-btn").addEventListener("click", function(){
    document.getElementsByClassName("success")[0].classList.add("active-success");
});
document.getElementById("okay-btn").addEventListener("click", function(){
    document.getElementsByClassName("success")[0].classList.remove("active-success");
});



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