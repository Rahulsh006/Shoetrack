// carousel main banner

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}



document.getElementById("show-more-btn2").addEventListener("click", function() {
    var moreProducts = document.getElementById("more-products");

    // Toggle visibility of the product grid with transition
    if (moreProducts.classList.contains("show")) {
        moreProducts.classList.remove("show"); // Hide with transition
        setTimeout(function() {
            moreProducts.style.display = "none"; // Fully hide after transition
        }, 500); // Wait for transition to finish
        this.innerText = "LOAD MORE PRODUCTS"; // Change button text back to "Load More"
    } else {
        moreProducts.style.display = "flex"; // Show the product grid immediately
        setTimeout(function() {
            moreProducts.classList.add("show"); // Add transition effect
        }, 10); // Delay for smooth transition start
        this.innerText = "SHOW LESS PRODUCTS"; // Change button text to "Show Less"
    }
});

