const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Home");
})

app.listen(3000,()=>{
console.log("whats up listening");
});