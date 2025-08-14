const express =require("express")
const cors =require("cors")

const app =express()
app.use(express.json())
// app.use(cors())

//user 
let user =[]

//get 
app.get("/",(req,res)=>{
res.send(" welcome home")
})

app.get("/hello",(req,res)=>{
     res.send("hello world")
})
////start here add user

app.post("/users",(req,res)=>{
    //check the id for user
    const checkUser=req.body
    const findUser=user.find((e)=>{
      return  e.id ===checkUser.id
    })
    console.log(findUser)
    if(findUser){
        res.status(400).send("user already exit ")
        return
    }
    user.push(req.body)

   console.log(user)
  res.status(200).send("user add")

})

app.get("/users",(req,res)=>{
    if(user.length===0){
   return  res.status(404).send("not user found")
  
    }
    res.status(200).send(user)
})



/// === end here add user


//post create data 
app.post("/create",(req,res)=>{
    res.send("created ! ")
})

///delete 
app.delete("/users/:id",(req,res)=>{
    const {id}=req.params
    const deleteUser=user.findIndex((e)=> e.id ===id)
    console.log(deleteUser)

    if(deleteUser !=-1){
        res.status(400).send("user not found")
        return
    }

    user.splice(deleteUser,1)
    res.status(200).send("user deleted")
})


app.listen(3000,()=>{
    console.log("server start")
})