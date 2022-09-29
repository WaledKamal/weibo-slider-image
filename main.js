/**
 weibo-challenge 
 */

function customPlugin(editor) {
  //slide1
  editor.BlockManager.add("slide1", {
    category: "Carousel",
    label: '<h1><i class="far fa-play-circle fa-lg"></i></h1> Slides only',
    content:
      '<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"> </div> <div class="carousel-item"> <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"> </div> <div class="carousel-item"> <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"> </div> </div> </div>',
  });
  //slide2
  editor.BlockManager.add("slide2", {
    category: "Carousel",
    label:
      '<h1><i class="far fa-play-circle fa-lg"></i></h1> Slides With controls',
    content:
      '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel"> <div class="carousel-inner"> <div class="carousel-item active"> <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg" alt="First slide"> </div> <div class="carousel-item"> <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg" alt="Second slide"> </div> <div class="carousel-item"> <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide"> </div> </div> <a onclick="prevSlide()" class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span onclick="prevSlide()" class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a onclick="nextSlide()" class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>',
  });
}

var editor = grapesjs.init({
  container: "#gjs_container",
  storageManager: {
    type: "remote",
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1,
    urlStore: "queries/save_webpage.php",
    urlLoad: "queries/load_webpage.php",
    // For custom parameters/headers on requests
    params: { _some_token: "" },
    headers: { Authorization: "Basic" },
  },
  plugins: [customPlugin],
  pluginsOpts: {},
  canvas: {
    styles: [
      "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
      "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css",
    ],
    scripts: [
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js",
    ],
  },
});
