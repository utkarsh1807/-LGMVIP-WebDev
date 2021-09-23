function initMap() {
    const uluru = { lat: 26.840258945737055, lng:  80.94775533719731 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  function JoinMembership(){
    prompt("Enter Name:","David");
    prompt("Enter Email ID:","davidJ@gmail.com");
    alert("You have successfully registered!");
}
function subscribe(){
    alert("Thanks! for subscribing");
}
function contact(){
    alert("W'll contact you soon...");
}
function order(){
    prompt("Enter your Name:")
    alert("Your Order has been placed successfully.");
}
