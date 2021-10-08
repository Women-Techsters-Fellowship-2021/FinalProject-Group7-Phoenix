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



const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector("img")

function defaultBtnActive() {
    defaultBtn.click()
}

defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function() {
            const result = reader.result;
            img.src = result;
        }

        reader.readAsDataURL(file)
    }

    if(this.value) {
        let valueStore = this.value;
        fileName.textContent = valueStore;
    }

   
})


// var context = canvas.getContext('2d');
snap.addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
})



