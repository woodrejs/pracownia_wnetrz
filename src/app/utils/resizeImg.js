export default function resizeImg(file, MAX_WIDTH) {
  var img = document.createElement("img");
  img.src = window.URL.createObjectURL(file);

  return new Promise((resolve) => {
    img.onload = function () {
      var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        oc = document.createElement("canvas"),
        octx = oc.getContext("2d");

      canvas.width = MAX_WIDTH; // destination canvas size
      canvas.height = (canvas.width * img.height) / img.width;

      var cur = {
        width: Math.floor(img.width * 0.9),
        height: Math.floor(img.height * 0.9),
      };

      oc.width = cur.width;
      oc.height = cur.height;

      octx.drawImage(img, 0, 0, cur.width, cur.height);

      while (cur.width * 0.5 > canvas.width) {
        cur = {
          width: Math.floor(cur.width * 0.5),
          height: Math.floor(cur.height * 0.5),
        };
        octx.drawImage(
          oc,
          0,
          0,
          cur.width * 2,
          cur.height * 2,
          0,
          0,
          cur.width,
          cur.height
        );
      }

      ctx.drawImage(
        oc,
        0,
        0,
        cur.width,
        cur.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
      canvas.toBlob(
        function (blob) {
          resolve(blob);
        },
        "image/jpeg",
        0.95
      );
    };
  });
}
