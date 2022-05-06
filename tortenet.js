//this is js code pogu
let isItItalic=false;
const howMany=2;
function makeItalic() {
    let str1;
    if(!isItItalic){
        isItItalic=true;
        for (let index = 1; index < howMany; index++) {
            str1="text"+index;
            document.getElementById(str1).style.fontStyle="italic";
        }
    }else{
        isItItalic=false;
        for (let index = 1; index < howMany; index++) {
            str1="text"+index;
            document.getElementById(str1).style.fontStyle="normal";
        }
    }
}
function makeBig(){
    for (let index = 1; index < howMany; index++) {
        str1="text"+index;
        document.getElementById(str1).style.fontSize="larger";
    }
}
function makeSmall(){
    for (let index = 1; index < howMany; index++) {
        str1="text"+index;
        document.getElementById(str1).style.fontSize="smaller";
    }
}
function Gyengénlátóknak(){
    for (let index = 1; index < howMany; index++) {
        str1="text"+index;
        document.getElementById(str1).style.fontSize="larger";
    }
    document.body.style.backgroundColor = 'white';  
}
