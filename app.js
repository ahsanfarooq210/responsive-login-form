const inputs = document.querySelectorAll(".input-field");
const toggle_btn=document.querySelectorAll(".toggle");
const main=document.querySelector("main");
const bullets=document.querySelectorAll('.bullets span');
const images=document.querySelectorAll(".image");


inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });

  inp.addEventListener("blur", () => {
    if (inp.value !== "") {
      return;
    }
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    main.classList.toggle('sign-up-mode')
  })
})

bullets.forEach((bullet)=>{
  bullet.addEventListener("click",moveSlider)
})

function moveSlider(){
  let index = this.dataset.value

  let currentImage = document.querySelector(`.img-${index}`)
  images.forEach((image)=>{
    image.classList.remove("show")
  })

  currentImage.classList.add("show")

  const textSlider=document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index-1)*2.2}rem)`

  console.log(index)
  bullets.forEach((bullet)=>bullet.classList.remove('active'))
  this.classList.add("active")
}




