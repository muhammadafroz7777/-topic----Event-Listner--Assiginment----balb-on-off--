// var btn = document.getElementById("btn");
// var div_container = document.getElementById("div_container");

// // function , 2 , event , function
// btn.addEventListener("click", function () {
//   alert("Hello Click Event");
// });

// btn.addEventListener("mouseover", function () {
//   alert("Mouse upar agya");
// });

// div_container.addEventListener("mouseover", function () {
//   console.log(div_container.src);
//   div_container.src = "https://i.giphy.com/h55EUEsTG9224.webp";

//   div_container.style.height = "400px";
//   div_container.style.width = "400px";
//   div_container.style.borderRadius = "100%";
// });
// div_container.addEventListener("mouseout", function () {
//   div_container.src ="https://images.unsplash.com/photo-1502590464431-3b66d77494d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvd3N8ZW58MHx8MHx8fDA%3D";
// });


// ------------------

// var btn = document.getElementById("btn");
// var off = document.getElementById("off");
var lightBtn = document.getElementById("light");
var img = document.getElementById("img");

lightBtn.addEventListener('click',()=>{
    if(img.alt =='off'){
        img.src= 'image/on.png';
        img.alt= 'on'
        lightBtn.textContent = 'Off'
        heading.textContent = 'Light Off'
    }else{
        img.src= 'image/off.png';
        img.alt= 'off'
        lightBtn.textContent = 'On'
        heading.textContent = 'Light On'

    }
})




// btn.addEventListener("click", function(){
//     div_container.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gmPFE4xKy4j4dHLKyG78BbbTBvWz8mQaRRb3w4aO0fmBmlhzgTVqCZSSX54GZIuaaCc&usqp=CAU";
// });

// btn.addEventListener("click", function(){
//     div_container.src = 'image/on.png';
// });


// off.addEventListener("click", function(){
//     div_container.src = 'image/off.png';
// })

// btn.addEventListener("click", function(){
//     alert("Hello Click Event");
// })

// div_container.addEventListener("mouseover",function() {
//     console.log(div_container.src);
//     // div_container.src = "https://i.giphy.com/h55EUEsTG9224.webp";
//     div_container.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gmPFE4xKy4j4dHLKyG78BbbTBvWz8mQaRRb3w4aO0fmBmlhzgTVqCZSSX54GZIuaaCc&usqp=CAU";
     
// });



