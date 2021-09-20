const loader=document.getElementById("loading")

function displayLoading(){
    loader.classList.add("display")
}

function hideLoading(){
    loader.classList.remove("display")
}

function addCatAnimation(status){
    const catAnimation=document.createElement("img")
    catAnimation.setAttribute("src", `https://http.cat/${status}`)
    document.getElementById("result").appendChild(catAnimation);
}
document.getElementById("check-button").addEventListener("click", checkText)

async function checkText(){
    const resultElement=document.getElementById("result");
    resultElement.innerText = "";
    displayLoading();
    const response= await fetch("https://sentim-api.herokuapp.com/api/v1/", {
        method: "POST" ,
        headers: {
            'Accept': "application/json" ,
            'Content-Type': "application/json",
        },
        body: JSON.stringify({'text': document.querySelector("input").value})
    })
    if(!response.ok){
        hideLoading();
        document.getElementById("result").innerText="ERROR "+response.status+". "+response.statusText
        addCatAnimation(response.status)
        throw `ERROR ${response.status}`
    }
    let result= await response.json()

    const polarityOfResult=JSON.stringify(result.result.polarity);
    const typeOfResult =JSON.stringify(result.result.type)
    
    if(polarityOfResult>0){
        resultElement.classList="";
        resultElement.classList.add("positive")
    } else if(polarityOfResult<0){
        resultElement.classList="";
        resultElement.classList.add("negative");
    } else {
        resultElement.classList="";
        resultElement.classList.add("neutral")
    }
    hideLoading();
    resultElement.innerText = "It is result of the analys.\nThe text you wrote has:\nPolarity = "+polarityOfResult+"\nThe type of text is "+typeOfResult+"."
    addCatAnimation(response.status)
}

