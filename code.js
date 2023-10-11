function KleurEnTekstAanpassen()
{
    document.getElementById("kop1").style.color="blueviolet";
    document.getElementById("kop1").innerHTML="Hallo!";
}

function Reset()
{
    document.getElementById("kop1").style.color="black";
    document.getElementById("kop1").innerHTML="I have changed!";   
}

function Calculate(getal1,getal2){
    antwoord = getal1 + getal2;
    console.log("het antwoord van de som is:");
    console.log(antwoord);
}

function Keer5(getal1){
    antwoord = getal1*5;
    console.log("Het antwoord van de som is:");
    console.log(antwoord);
}

function CalculateMinutes(seconden){
    antwoord = seconden / 60;
    console.log("het antwoord van de som is");
    console.log(antwoord);
}