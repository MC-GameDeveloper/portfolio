let PI = 3.14159;
//an array of synths so that multiple songs can be played at once
let xSynth =[];
let ySynth =[];
let zSynth =[];

//song array will be the tone Loop, and the names are the song functions at the bottom
let songArray =[];
let songNames = [one1Song, one2Song, two1Song, two2Song, three1Song, three2Song, four1Song, four2Song];

//used in toggle play to check if the song is being played
let isPlaying = [false,false,false,false,false,false,false,false];

//all classes in the div that have equations w/in them
var equationDivs = document.getElementsByClassName("backgroundHover");

window.onload = function(){setup();}
function setup(){
    //create 3 divs for each song
    for(var i = 0; i<songNames.length; i++){
        xSynth[i] = new Tone.Synth().toMaster();
        ySynth[i] = new Tone.MembraneSynth().toMaster();
        zSynth[i] = new Tone.FMSynth().toMaster();
    }

    //create the loop for each function
    for(var i = 0; i<songNames.length; i++){
        songArray[i]= new Tone.Loop(songNames[i], '8n');
    }
    Tone.Transport.bpm.value = 110; 
    Tone.Transport.start();
}

//add an event listener to each class that will trigger toggle play with the proper index value
for (var i = 0; i < songNames.length; i++) {
    (function(index) {
         equationDivs[index].addEventListener("mousedown", function() {
            togglePlay(index);
          })
    })(i);
}

//if its not playing play song and highlight backgroun else stop playing and unhighlight background
 function togglePlay(songNum){
     if(!isPlaying[songNum]){
        songArray[songNum].start(0);
        equationDivs[songNum].style.backgroundColor = "#383838";
        isPlaying[songNum] = true;
     }else{
        songArray[songNum].stop(0);
        equationDivs[songNum].style.backgroundColor = "#232528";
        isPlaying[songNum] = false;
     }  
}

//the equations that generate the sound 
function one1Song(t){
    console.log(t);
    let xFreq = 100.0*Math.sin(t*PI) * Math.cos(t); 
    let yFreq = 100.0*Math.sin(t*PI) * Math.sin(t);
    let zFreq = 100.0*Math.cos(t*PI)* Math.cos(t);
    attackRelease(0,xFreq,yFreq,zFreq,t)
}

function one2Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t * PI);
    let yFreq = Math.cos(t*PI) * Math.sin(t *PI);
    let zFreq = 100.0* Math.sin(t * PI)*Math.cos(t * PI);
    attackRelease(1,xFreq,yFreq,zFreq,t)

}

function two1Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t * PI);
    let yFreq = Math.cos(t*PI) * Math.sin(t *PI);
    let zFreq = 100.0* Math.sin(t * PI)*Math.cos(t * PI);
    attackRelease(2,xFreq,yFreq,zFreq,t)
}

function two2Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t * PI);
    let yFreq = Math.cos(t*PI) * Math.sin(t *PI);
    let zFreq = 100.0* Math.sin(t * PI)*Math.cos(t * PI);
    attackRelease(3,xFreq,yFreq,zFreq,t)
}

function three1Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t * PI);
    let yFreq = Math.cos(t*PI) * Math.sin(t *PI);
    let zFreq = 100.0* Math.sin(t * PI)*Math.cos(t * PI);
    attackRelease(4,xFreq,yFreq,zFreq,t)
}

function three2Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t * PI);
    let yFreq = Math.cos(t*PI) * Math.sin(t *PI);
    let zFreq = 100.0* Math.sin(t * PI)*Math.cos(t * PI);
    attackRelease(5,xFreq,yFreq,zFreq,t)
}

function four1Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t * PI);
    let yFreq = Math.cos(t*PI) * Math.sin(t *PI);
    let zFreq = 100.0* Math.sin(t * PI)*Math.cos(t * PI);
    attackRelease(6,xFreq,yFreq,zFreq,t)
}

function four2Song(t){
    let xFreq = 100.0*Math.cos(t*PI) * Math.sin(t * PI);
    let yFreq = Math.cos(t*PI) * Math.sin(t *PI);
    let zFreq = 100.0* Math.sin(t * PI)*Math.cos(t * PI);
    attackRelease(7,xFreq,yFreq,zFreq,t)
}

//the attack release function for each synth 
function attackRelease(i,x,y,z,t){
    xSynth[i].triggerAttackRelease(x,"8n",t);
    ySynth[i].triggerAttackRelease(y,"8n",t);
    zSynth[i].triggerAttackRelease(z,"8n",t);
}

document.documentElement.addEventListener(
    "mousedown", function(){
      mouse_IsDown = true;
      if (Tone.context.state !== 'running') {
      Tone.context.resume();
    }})
