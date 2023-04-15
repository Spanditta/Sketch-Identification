function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
  }
  function preload(){
    mymodel= ml5.imageClassifier('DoodleNet');
  }
  function classifyCanvas(){
    mymodel.classify(canvas,gotResult);
  }
function WipeScreen(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    document.getElementById('drawingname').innerHTML = 'You Drew: ' + results[0].label;
  
    document.getElementById('accuracy').innerHTML = 'Accuracy: ' + Math.round(results[0].confidence * 100) + '%';
  
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
  }
  