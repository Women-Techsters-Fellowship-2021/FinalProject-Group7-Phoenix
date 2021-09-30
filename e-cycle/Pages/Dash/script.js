/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




// const linkColor = document.querySelectorAll('.nav__link')
// function colorLink() {
//     linkColor.forEach(l => l.classList.remove('active'))
//     this.classList.addEventListener('active')
// }
// linkColor.forEach(l => l.addEventListener('click', colorLink))


//Recycle Javascript Code


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
