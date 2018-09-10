window.onload = function(){
    // create references to the modal...
  var modal = document.getElementById('myModal');
  // to all images -- note I'm using a class!
  var images = document.getElementsByClassName('myImages');
  // the image in the modal
  var modalImg = document.getElementById("img01");
  // and the caption in the modal
  var captionText = document.getElementById("caption");

  // Go through all of the images with our custom class
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
      console.log(evt);
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }
};

function hideShow0() {
    var x = document.getElementById("myDIV0");
    var y = document.getElementById("myDIV0.1");
    var z = document.getElementById("myDIV0.2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function hideShow1() {
    var x = document.getElementById("myDIV1");
    var y = document.getElementById("myDIV1.1");
    var z = document.getElementById("myDIV1.2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function hideShow2() {
    var x = document.getElementById("myDIV2");
    var y = document.getElementById("myDIV2.1");
    var z = document.getElementById("myDIV2.2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function hideShow3() {
    var x = document.getElementById("myDIV3");
    var y = document.getElementById("myDIV3.1");
    var z = document.getElementById("myDIV3.2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function hideShow4() {
    var x = document.getElementById("myDIV4");
    var y = document.getElementById("myDIV4.1");
    var z = document.getElementById("myDIV4.2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}
