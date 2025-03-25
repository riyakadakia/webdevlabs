

var x = 5;
var y = 7;
let z=x+y;
console.log(z);

let a = "Hello ";
let b = "World!"
c=a+b;
console.log(c);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
    return x3;
}

let x4 = SumNPrint(x,y);
let x5 = SumNPrint(a,b);

if(x5.length==x4)
{
    console.log("Good Job!");
}

const l1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const l2 = ["Apple", "Banana", "Kiwi", "Orange"];

/*function findTheBanana(l)
{
    for(let i=0; i<l.length; i++)
    {
        if(l[i]=="Banana")
        {
            console.log("found the Banana in " + i);
            alert("found the Banana in " + i);
        }
    }
    findTheBanana(l1);
    findTheBanana(l2);
}*/

function findTheBanana(item, index, arr)
{
    if(item=="Banana")
    {
        console.log("found the Banana in the " + arr);
        alert("found the Banana in the " + arr);
    }
}



function greetingFunc()
{
    let d = new Date();
    let h = d.getHours();
    console.log(h);
    if(h<12)
    {
        document.getElementById("greet").innerHTML = "Good Morning, I am Riya Kadakia";
    }
    else if(h<18)
    {
        document.getElementById("greet").innerHTML = "Good Afternoon, I am Riya Kadakia";
    }
    else if(h<20)
    {
        document.getElementById("greet").innerHTML = "Good Evening, I am Riya Kadakia";
    }
    else
    {
        document.getElementById("greet").innerHTML = "Good Night, I am Riya Kadakia";
    }
}

if (window.location.href.includes("index.html") || window.location.pathname === "/index.html") {
    greetingFunc();
    //l1.forEach((item, index) => findTheBanana(item, index, "first array"));
    //l2.forEach((item, index) => findTheBanana(item, index, "second array"));
} else {
    console.log("Not on index.html, skipping greetingFunc.");
}


function addYear()
{
    let d = new Date();
    let y = d.getFullYear();
    document.getElementById("copyYear").innerHTML += y;

}

/*
function showList()
{
    var x = document.getElementById("list");
    x.style.display = "block";
    var y = document.getElementById("button_list");
    y.style.display = "none";
}
*/

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
})

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
})

function validForm()
{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    if(!name.checkValidity() || !email.checkValidity() || !comment.checkValidity())
    {
        document.getElementById("invalidForm").innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
}

async function getAdvice()
{
    /*const response = fetch("https://api.adviceslip.com/advice");    
    const advice = await response.json();
*/
    advice = fetch("https://api.adviceslip.com/advice")   
        .then(advice => advice.json())
        .then(data => {
            console.log(data);
            console.log(data.slip.advice)
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => console.error("Error fetching advice"))
    
}