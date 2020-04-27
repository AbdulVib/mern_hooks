const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//get models
const Users = require('./schema')


app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//db
mongoose.connect('mongodb+srv://abdul:sayed4747@cluster0-4mu3w.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('connected'))
    .catch(err => console.log(err))


// const products = [
//     { name: 'ram', age: 21 },
//     { name: 'shyam', age: 31 },
//     { name: 'karan', age: 41 }
// ]

app.get('/data', (req, res) => {
    Users.find({})
        .then(data => res.json(data))
        .catch(err => console.log(err, ' err'))
})

//post
app.post('/add', (req, res) => {
    const { name, age } = req.body

    const newUser = new Users({
        name, age
    })

    newUser.save()
        .then(data => res.json(data))
        .catch(err => console.log(err, ' errrrr'))

})

//delete
app.delete('/remove/:id',(req,res)=>{
    Users.findOneAndRemove( { _id: req.params.id } )
        .then(data => res.json(data))
        .catch(err => console.log(err, ' errrrr'))
})


const PORT = process.env.PORT || 5000

app.listen(PORT)