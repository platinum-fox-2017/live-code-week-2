function generateJajarGenjang(panjang, lebar){
    for(let i = 0; i < lebar+2 ; i++){
        if(i==0||i==lebar+1)
            console.log(printSpace(i)+printBarisStrip(panjang));
        else
            console.log(printSpace(i)+printBarisSlash(panjang));
    }
}

function printBarisStrip(num){
    let tempStr = new String();
    for(let i = 0; i < num; i++){
        tempStr += "- ";
    }
    return tempStr;
}

function printBarisSlash(num){
    let tempStr = "\\";
    for(let i = 0; i < (2*num-1); i++){
        tempStr += " ";
    }
    tempStr += "\\";
    return tempStr;
}

function printSpace(num){
    if(num<1)
        return ""
    else
        return " ".repeat(num*2-2)
}


generateJajarGenjang(5,4)
generateJajarGenjang(3,3)
generateJajarGenjang(2,4)
