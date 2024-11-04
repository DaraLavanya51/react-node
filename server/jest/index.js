const add=(a,b)=>{
    return a+b;
}

const err=()=>{
    throw new Error('I am new error')
}

const promiseTest=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(a-b>0){
            resolve('+ve')
        }
        else{
            reject('-ve');
        }
    })
}


const arr =()=>{
    return ['Bat']
}

const express = require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/users',(req,res)=>{
    res.status(200).json({
        users:[
            {
            name:"lavanya",
            email:"lavanya@gmail.com"
            }

        ]
    })
})

app.listen(3000)


module.exports={
    add,
    err,
    promiseTest,
    arr,
    app

}