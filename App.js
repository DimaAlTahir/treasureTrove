let opts = {
    // Whether to scan continuously for QR codes. If false, use scanner.scan() to manually scan.
    // If true, the scanner emits the "scan" event when a QR code is scanned. Default true.
    continuous: true,
    // The HTML element to use for the camera's video preview. Must be a <video> element.
    // When the camera is active, this element will have the "active" CSS class, otherwise,
    // it will have the "inactive" class. By default, an invisible element will be created to
    // host the video.
    video: document.getElementById('preview'),
    // Whether to horizontally mirror the video preview. This is helpful when trying to
    // scan a QR code with a user-facing camera. Default true.
    mirror: false,
    // Whether to include the scanned image data as part of the scan result. See the "scan" event
    // for image format details. Default false.
    captureImage: false,
    // Only applies to continuous mode. Whether to actively scan when the tab is not active.
    // When false, this reduces CPU usage when the tab is not active. Default true.
    backgroundScan: true,
    // Only applies to continuous mode. The period, in milliseconds, before the same QR code
    // will be recognized in succession. Default 5000 (5 seconds).
    refractoryPeriod: 5000,
    // Only applies to continuous mode. The period, in rendered frames, between scans. A lower scan period
    // increases CPU usage but makes scan response faster. Default 1 (i.e. analyze every frame).
    scanPeriod: 1
};

let cameraIndex = 0; //The index of the selected camera.
let cameraArray; //An array of all available cameras.
//The scanner listener - when a code is scanned, do something:
let scanner = new Instascan.Scanner(opts);
scanner.addListener('scan', function (content) {
    console.log(content);
    document.getElementById("content").innerHTML = content;
});

//Initialize the cameras:
Instascan.Camera.getCameras().then(function (cameras) {
    cameraArray = cameras; //Set the value for cameraArray, so that we can know what cameras we can use later
    if (cameras.length > 0) {
        cameraIndex = 0; //Set the first camera as the default
        scanner.start(cameras[0]); //Start the default camera
    } else {
        alert('No cameras found.');
    }
}).catch(function (e) {
    alert(e);
});

function switchCamera() {
    //Cycle through the available cameras:
    if (cameraIndex < cameraArray.length - 1) {
        cameraIndex++;
    }
    else {
        cameraIndex = 0;
    }
    //Find the next camera to use:
    let camera = cameraArray[cameraIndex];
    //Start the new selected camera:
    scanner.start(camera);
}

let displayCam =document.getElementById("tgCamera");

// hide/reveal the display of the camera
function toggleCamera() {
    if (displayCam.style.display !== "block") {
        displayCam.style.display = "block";
    }else {
        displayCam.style.display = "none";
    }
}

function goToIndex() {
    setTimeout(function(){window.location.href = "index.html";},500);
}

function restartGame() {
    setTimeout(function(){window.location.href="Signin.html?restart";},500)
}
// function urlify(text) {
//     var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
//     //var urlRegex = /(https?:\/\/[^\s]+)/g;
//     return text.replace(urlRegex, function(url,b,c) {
//         var url2 = (c == 'www.') ?  'http://' +url : url;
//         return '<a href="' +url2+ '" target="_blank">' + url + '</a>';
//     })
// }