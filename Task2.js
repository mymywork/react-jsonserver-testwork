//выполните в консоле
function task2() {

    new Promise((res)=> {
        setTimeout(()=> {console.log(0)});
        res();
    })
        .then(()=> console.log(1))
        .then(()=>{throw 5})
        .then(()=>console.log(2))
        .catch((er)=>console.log(er))
        .then(()=>console.log(4))
        .finally(()=>console.log(6));

    return 7;
}

task2();