var static = document.getElementById("static"),
context = static.getContext("2d"),
tvHeight = 330,
tvWidth = 550,
pixelWidth = 4,
pixelHeight = 3;

function drawStatic() {
	for (var v=55; v < tvHeight; v += pixelHeight){
		for (var h=200; h < tvWidth; h += pixelWidth){
			lum = Math.floor( Math.random() * 40 );
			context.fillStyle = "hsl(0, 0%," + lum + "%)";
         	context.fillRect(h,v,pixelWidth,pixelHeight);
      }
   }
 requestAnimationFrame(drawStatic);
}

var audioContext = new(AudioContext ||webkitAudioContext),
gainNode = audioContext.createGain(),
bufferSize = 4096,
pinkNoise = (function() {
    var b0, b1, b2, b3, b4, b5, b6;
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
    var node = audioContext.createScriptProcessor(bufferSize, 1, 1);
    node.onaudioprocess = function(e) {
        var output = e.outputBuffer.getChannelData(0);
        for (var i = 0; i < bufferSize; i++) {
            var white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.11; // (roughly) compensate for gain
            b6 = white * 0.115926;
        }
    }
    return node;
})();

pinkNoise.connect(audioContext.destination);

  drawStatic();


document.addEventListener("visibilitychange", function() {
if (document.hidden) {  
gainNode.gain.value = 0; 
} else {
gainNode.gain.value = 1; 
} 
});
