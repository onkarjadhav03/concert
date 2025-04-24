const cors=require("cors");
const express=require("express")
require("dotenv").config();
const{createTour,getTour}=require("./controllers/dataController")

const {getAfterParties,getConcerts,getMerchandiseStalls,
    getConcertsByArtistAndCity,getMerchandiseStallsByStallName,getAfterPartiesByCity}=require("./controllers/tourController");
const { sequelize } = require("./models");
const app=express()

app.use(express.json())
app.use(cors());


app.post("/tour",createTour);
app.get("/tour/:id",getTour);
app.get("/data/concerts",getConcerts);
app.get("/data/afterparties",getAfterParties);
app.get("/data/merchandisestalls",getMerchandiseStalls)
app.get("/concerts/search",getConcertsByArtistAndCity)
app.get("/merchandiseStall/search",getMerchandiseStallsByStallName)
app.get("/afterParties/search",getAfterPartiesByCity)

sequelize.authenticate().then(()=>{
    console.log("database connected");
}).catch(error=>{
    console.error("Unable to connect to the database",error)
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})