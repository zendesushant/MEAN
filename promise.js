const add=(a,b)=>{

    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve(a+b)
    },2000)})
}
add(2,3).then((sum)=>{

    console.log(sum)
    add(sum,10).then((sum)=>{

        console.log(sum)
    }).then((error)=>{
        console.log("Inner Promise Error")
    })
}).catch(()=>{

    console.log("Promise 1 Error")
})