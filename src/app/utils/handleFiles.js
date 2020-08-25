function handleFiles(e, MAX_WIDTH, MAX_HEIGHT) {
  const file = e.target.files[0];

  // Create an image
  var img = document.createElement("img");
  // Create a file reader
  var reader = new FileReader();
  // Set the image once loaded into file reader
  reader.onload = function (e) {
    img.src = e.target.result;

    var canvas = document.createElement("canvas");
    //var canvas = $("<canvas>", {"id":"testing"})[0];
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var width = img.width;
    var height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    var file = canvas.mozGetAsFile("foo.png");
  };
  // Load files into file reader
  reader.readAsDataURL(file);

  // Post the data
  /*
    var fd = new FormData();
    fd.append("name", "some_filename.jpg");
    fd.append("image", dataurl);
    fd.append("info", "lah_de_dah");
    */
}
export default handleFiles;
