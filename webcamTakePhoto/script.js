let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let image_data_url = document.querySelector("#canvas").toDataURL();

camera_button.addEventListener('click', async function() {
  let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  video.srcObject = stream;
});

click_button.addEventListener('click', function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  let click_image_data_url = canvas.toDataURL('image/jpeg');
  // data url of the image
  //alert(click_image_data_url);
});


function saveLabel() {
  alert(image_data_url);
  sessionStorage.setItem("THING", image_data_url);
  image_data_url.addEventListener('load', () => {
    localStorage.setItem('thumbnail', image_data_url.result);
  });
}

