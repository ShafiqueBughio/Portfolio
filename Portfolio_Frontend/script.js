//toggle icon bar
 let menuicon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 menuicon.onclick = ()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

 }







//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            //active nav-bar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
            // active section for animation on scroll 
            sec.classList.add('show-animate');
        }
// if we want to use animation that repeat on scroll use this 
else{
    sec.classList.remove('show-animate');
}
    });
    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // Animation footer on scroll 
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

