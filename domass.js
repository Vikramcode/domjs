document.body.style.backgroundColor="white";

const random =document.getElementById("button");

random.addEventListener("mousemove", function (){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    const newrgb = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor= newrgb;

    random.innerText=newrgb;
    random.style.backgroundColor=newrgb;
    random.style.borderColor="gold";
    random.style.color="white";
})
