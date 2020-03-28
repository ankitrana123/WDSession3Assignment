



function calRMS(){
    let inputNums = document.getElementById("inputNumber")
    let arr = inputNums.value.split(',');
    arr2 = arr.map(item => Math.pow(item,2));
    rmsSum = 0
    arr2.forEach(element => {
        rmsSum+=element;
    });

rmsVal = rmsSum/arr.length;
document.getElementById("Rms").innerText =rmsVal;
}

function calnRMS(){
    let inputNums = document.getElementById("inputNumber")
    let arr = inputNums.value.split(',');
    nrmsSum=0;
     counter=0;
    arr2 = arr.filter((v,i,o) =>{
        if(v<0){
            nrmsSum += Math.pow(v,2);
            counter++;
        }
    });
    nrmsVal = nrmsSum/counter;
    document.getElementById("NRms").innerText =nrmsVal;
}


function calpRMS(){
    let inputNums = document.getElementById("inputNumber")
    let arr = inputNums.value.split(',');
    prmsSum=0;
     counter=0;
    arr2 = arr.filter((v,i,o) =>{
        if(v>0){
            prmsSum += Math.pow(v,2);
            counter++;
        }
    });
    prmsVal = prmsSum/counter;
    document.getElementById("PRms").innerText =prmsVal;
}





