//Getting all needed elements from HTML code
const loaderElement = document.getElementById("loading")
const resultElement = document.getElementById("result");

//Function of displaying loading element in the page
function displayLoading(){
    loaderElement.classList.add("display")
}

function hideLoading(){
    loaderElement.classList.remove("display")
}

//Function that add cat animation to result with given status
function addCatAnimation(status){
    const catAnimation = document.createElement("img")
    catAnimation.setAttribute("src", `https://http.cat/${status}`)
    resultElement.appendChild(catAnimation);
}

//Main function that send request and work with it
async function checkText(){
    resultElement.innerText = ""; //deleting all text or elements from result
    resultElement.classList = ""; //delete all classes of result
    
    displayLoading(); //start to display loading element

    const response = await fetch("https://sentim-api.herokuapp.com/api/v1/", { //send request to API
        method: "POST" ,
        headers: {
            'Accept': "application/json" ,
            'Content-Type': "application/json",
        },
        body: JSON.stringify({'text': document.querySelector("textarea").value})
    })

    if(!response.ok){ // error part: behavior of all elements in error situation anf throw ERROR with current status
        hideLoading();
        resultElement.innerText="ERROR "+response.status+". "+response.statusText //displaying in result element at error message
        addCatAnimation(response.status)
        throw `ERROR ${response.status}`
    }

    const result = await response.json() 
    const polarityOfResult = JSON.stringify(result.result.polarity);
    const typeOfResult = JSON.stringify(result.result.type)
    resultElement.classList.add(typeOfResult.slice(1,(typeOfResult.length-1))); //adding specific status to the result class; using slice to avoid double quotes in ste status name

    hideLoading(); //finish to display loading element

    resultElement.innerText = "It is result of the analys.\nThe text you wrote has:\nPolarity = "+polarityOfResult+"\nThe type of text is "+typeOfResult+".";//displaying result of the request
    addCatAnimation(response.status)
}

document.getElementById("check-button").addEventListener("click", checkText)