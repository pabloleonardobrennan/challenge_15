function throwDices(){
let dado1 = 0;
let dado2 = 0;

    while(dado1 == 0 || dado2 == 0){
        dado1 = Math.round((Math.random())*6);
        dado2 = Math.round((Math.random())*6);
    }
        alert(`Dado#1: ${dado1} \nDado#2: ${dado2}`);
    
}