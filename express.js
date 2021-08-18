const express = require('express');
let data = require('./data.js')
const app = express();
const port = 5000;

app.use(express.json())

app.get("/user", (req,res) => {
    res.status(200).json(data)
})

app.get("/user/:id", (req,res) => {
    const id = req.params.id;
    const user = data.find(u => u.id === parseInt(id))
    console.log(user)
    if(user)
    {
        res.status(200).json(user)
    } 
    else
    {
        res.status(404).json('Aradığınız Kullanıcı Bulunamadı')
    }
})

let nextId = 3;

app.post("/user", (req,res) => {
    let addUser = req.body;
    addUser.id = nextId;
    nextId++;
    data.push(addUser);
    res.status(201).json(addUser)
})

app.put("/user/:id", (req,res) => {
    let updateId = req.params.id;
    let updateUserBody = req.body;
    let updateUser = data.find(u=> u.id === Number(updateId))
    if(updateUser)
    {
        updateUser.fullName = updateUserBody.fullName;
        updateUser.position = updateUserBody.position;
        res.status(200).json(updateUser);
    }
    else
    {
        res.status(400).json('Güncellenecek veri bulunamadı')
    }
})

app.delete("/user/:id", (req,res) => {
    const deleteById = req.params.id;
    const deleteUser = data.find(u=> u.id === Number(deleteById))
    console.log(deleteUser)
    if(deleteUser)
    {
        data = data.filter(u=> u.id !== Number(deleteById))
        res.status(204).end()
    }
    else
    {
        res.status(404).json('Silmek istediğiniz kullanıcı bulunamadı')
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port} adresinden gelen istekler dinleniyor...`)
})