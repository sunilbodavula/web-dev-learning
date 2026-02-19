import express from 'express';
const app = express();
const port = 3000;

const today = new Date();
let day = today.getDay();
let type = "its a weekday";
let adv = "work hard";

if(day === 0 || day === 6){
    type = "its a weekend";
    adv = "have fun";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
    dayType: type,
    advice: adv
})
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});