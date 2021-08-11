const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs')


const staticPath = (path.join(__dirname,'../public'))
const templates_path = (path.join(__dirname,'../templates/views'))
const partials_path = (path.join(__dirname,'../templates/partials'))
app.use(express.static(staticPath));

app.set('view engine','hbs');
app.set('views',templates_path)
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{

    res.render("index");
})



app.get("/weather",(req,res)=>{

    res.render("weather");
})


app.get("*",(req,res)=>{

    res.render("404error",{
        errorMsg:'Page Not Found'
    });
})


app.listen(port,()=>{

    console.log(`listening at ${port}`);

})