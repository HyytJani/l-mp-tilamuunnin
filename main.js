
let lomake=document.forms['syote'];
lomake.addEventListener('submit',tulostaArvo)


function tulostaArvo(event){

    let arvo2=document.querySelector('#arvo input[type="text"]').value;
    let valinta=document.querySelector('#yksikot').value;
    event.preventDefault()

    if(valinta==0){
    let muunnaC= arvo2*1.8+32;
    console.log(muunnaC);
    console.log(valinta);}
    
    if(valinta==1){
        let muunnaF= (arvo2-32)/ 1.8;
        console.log(muunnaF);
        console.log(valinta);}}