const howMany=3;

function Gyengénlátóknak(){
    for (let index = 1; index < howMany; index++) {
        str1="text"+index;
        document.getElementById(str1).style.fontSize="larger";
    }
    document.body.style.backgroundColor = 'white';  
}