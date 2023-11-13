var moon = document.getElementById("moon");
moon.onclick = function clickButton() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
     moon.src = "bootstrap 5/img/moon.svg" ;
    }else {
       moon.src= "bootstrap 5/img/sun.svg";
    }
}


 // map
function initMap() {
    var options= {
      zoom:20,
      center:{lat:9.729880,lng:80.012950}
    }
    var googlemap = new google.maps.Map(document.getElementById("map"), options);
  }