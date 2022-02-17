function setSlide(number){
  clearSelected();
  currentSlider(number);
  document.querySelectorAll(".img_block")[number-1].style.borderBottom = "6px solid purple";
}
function clearSelected() {
   Array.from(document.querySelectorAll(".img_block")).forEach(item=>item.style.borderBottom = "");
}
 document.querySelector(".prev").addEventListener("click", () => {
    changeSlider(-1);
 });
 document.querySelector(".next").addEventListener("click", () => {
    changeSlider(1);
 });
 let sliderIndex = 1;
 showSlider(sliderIndex);
 function changeSlider(n) {
    showSlider((sliderIndex += n));
 }
 function currentSlider(n) {
    showSlider((sliderIndex = n));
 }
 function showSlider(n) {
    let i;
    let Slider = document.getElementsByClassName("slider");
    if (n > Slider.length) {
       sliderIndex = 1;
    }
    if (n < 1) {
       sliderIndex = Slider.length;
    }
    Array.from(Slider).forEach(item => (item.style.display = "none"));
    Slider[sliderIndex - 1].style.display = "block";
 } 
 