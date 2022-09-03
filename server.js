const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// ----- custom functions ----
function isEven(number){
    return number%2 === 0;
}

const app = express();
app.set("view engine","ejs");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("./public"));

app.get("/", function(request, respose){
    let date = new Date();
    date = date.toDateString();
    respose.render("index", {day:date});
});

app.post("/api/calculator", function(request, respose){
  
    const data = request.body;

    const number1 = Number(data?.num1);
    const number2 = Number(data?.num2);
    
    respose.json({
      num1: number1,
      num2: number2,
      operator: "Add",
      num1_isEven: isEven(number1) ? "Even" : "Odd",
      num2_isEven: isEven(number2) ? "Even" : "Odd",
      result: number1 + number2,
    });
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listning on port 3000...");
});