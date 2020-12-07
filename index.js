const carouselSlide = document.querySelector('.carousel-slide')
const carouselImage = document.querySelectorAll('.carousel-slide img')

const prevButton = document.querySelector('#prevBtn')
const nextButton = document.querySelector('#nextBtn')

let counter = 1
const size = carouselImage[0].clientWidth

// Since we want to start with 1st img not with the duplicate
carouselSlide.style.transform = `translateX(${-size * counter}px)`;
nextButton.addEventListener("click", () => {
    if (counter >=carouselImage.length-1)
    return;
    carouselSlide.style.transition ="transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    
})

prevButton.addEventListener("click", () => {
    if (counter <=0)
        return;
    carouselSlide.style.transition ="transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
})

carouselSlide.addEventListener("transitionend", () => {
    
    if (carouselImage[counter].id == "lastClone") {
        carouselSlide.style.transition ="none"
        counter = carouselImage.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        
    }

    if (carouselImage[counter].id == "firstClone") {
        carouselSlide.style.transition ="none"
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        
    }
    
})
