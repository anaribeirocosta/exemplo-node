if(process.argv.length ===3 && !isNaN(Number(process.argv[2]))){
    let base = process.argv[2]

for(let i=1; i < 11; i++){
    console.log(base* i);
}
}
else{
    console.log("utilização")
    console.log("node tabuada.js <numero>")
}

