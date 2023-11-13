let toggle = document.getElementById("toggleDark");
let body = document.querySelector("body");
let nav1 = document.getElementById("navbar1");
toggle.addEventListener('click',function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high")){
        body.style.background = "white";
        body.style.color = "black";
        nav1.style.color = "black";
        body.style.transition = "2s";
    }else{
        body.style.background ="black";
        body.style.color = "white";
        nav1.style.color = "white";
        body.style.transition = "2s";
    }
})


 // map
function initMap() {
    var options= {
      zoom:20,
      center:{lat:9.729880,lng:80.012950}
    }
    var googlemap = new google.maps.Map(document.getElementById("map"), options);
  }