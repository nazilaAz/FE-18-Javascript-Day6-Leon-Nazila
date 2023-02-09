var sandwiches = `{ 
    "sandwich": "hamburger", 
    "calories": "260" 
}`;


const sandwichJson = JSON.parse(sandwiches);
//console.log(sandwichJson.sandwich);

var fries = `{ 
    "fries_size": "Large French Fries", 
    "calories": "570" 
}`;
const friesJson = JSON.parse(fries);
//console.log(friesJson.fries_size);


document.getElementById("textPrint").innerHTML = `
My favorite sandwich is a ${sandwichJson.sandwich} which has approximately ${sandwichJson.calories} calories, along with it I enjoy eating ${friesJson.fries_size} which have about ${friesJson.calories} calories.
`;