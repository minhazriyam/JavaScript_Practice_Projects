const form = document.querySelector("form");

form.addEventListener("submit", function (e){

    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    results.innerHTML = "";
    
    if (height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height";
    } 
    else if (weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";   
    }
    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        if (bmi < 18.6){
            results.innerHTML = `<span> ${bmi} : You are Under Weight </span>`            
        }
        else if (bmi > 24.9) {
            results.innerHTML = `<span> ${bmi} : You are Over Weight </span>`
        }
        else{
            results.innerHTML = `<span> ${bmi} : You are Perfectly Fit!! </span>`
        }
    }

})


