document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((i) => {
        i.classList.toggle('change')
    })
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(()=>{
    i++
    
    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change')
    if (i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }
    

}, 1800)

const menuItems = document.querySelectorAll('.navbar-link');

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        document.querySelectorAll('.target').forEach((i) => {
            i.classList.toggle('change')
        })
      
      event.preventDefault();
      const targetId = item.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });

   

});