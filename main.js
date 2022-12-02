function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(528,255);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/K39cTxg2p/model.json", modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
   
}

function modelLoaded() {
    console.log("Model is loaded");
    classifier.classify(video, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("name_object").innerHTML = "Object: "+ results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy: "+floor(results[0].confidence*100)+"%";
    }
}