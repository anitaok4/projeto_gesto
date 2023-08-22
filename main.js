var previsao1 =""
var previsao2 =""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png' ,
    png_quality: 90
});

camera = document.getElementById("camerawebcam");
Webcam.attach('#camerawebcam');

function tirarfoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("fotocapturada").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}


console.log('versão ml5:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CYNTW8ElL/model.json', modelLoaded);

function modelLoaded(){
    console.log("modelo carregado");
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata1 = "A primeira previsao é " + previsao1
    speakdata2 = "E a segunda previsao é " + previsao2
    var utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2)
    synth.speak(utterThis)
}