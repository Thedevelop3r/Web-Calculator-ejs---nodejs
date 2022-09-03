//
//

let detailsDiv = document.getElementById("details");
let resultDiv = document.getElementById("result");
detailsDiv.style.visibility = "collapse";
resultDiv.style.visibility = "collapse";

async function sendData() {
  const num1 = number1.value;
  const num2 = number2.value;

  if (num1 && num2) {
    const response = await axios.post("/api/calculator", { num1, num2 });
    let { data } = response;
    console.log(data);
    document.getElementById("h2res").innerText = num1 + " + " + num2 + " = ";
    document.getElementById("res").innerText = data.result;
    document.getElementById("num1iseven").innerText =
      "Number 1 is a " + data.num1_isEven + " Number";
    document.getElementById("num2iseven").innerText =
      "Number 2 is a " + data.num2_isEven + " Number";
    document.getElementById("operator").innerText =
      "Operator : " + data.operator;
    detailsDiv.style.visibility = "visible";
    resultDiv.style.visibility = "visible";
  }
}
