


let lomake=document.forms['syote'];
lomake.addEventListener('submit',tulostaArvo);

function tulostaArvo(event){

    let arvo2=document.querySelector('#arvo input[type="text"]').value;
    let valinta=document.querySelector('#yksikot').value;
    
    event.preventDefault();
   
    let d;
    if (document.getElementById("dec1").checked==true){
        d=1;}
    if (document.getElementById("dec2").checked==true){
        d=2;}
    if (document.getElementById("dec3").checked==true){
        d=3;}
    
    if(valinta==0){
    let muunnosC= arvo2*1.8+32;    
    alert(arvo2+" Celsiusta on " +muunnosC.toFixed(d)+ " Fahrenheitia");}
    
    if(valinta==1){
    let muunnosF= (arvo2-32)/ 1.8;
        alert(arvo2+" Fahrenheitia on "+muunnosF.toFixed(d)+ " Celsiusta");}
    }
    