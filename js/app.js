$(function(){
    $('.parent').circulate({

    speed: 400,                  // Speed of each quarter segment of animation, 1000 = 1 second
    height: 300,                 // Distance vertically to travel
    width: 120,                  // Distance horizontally to travel
    sizeAdjustment: 100,         // Percentage to grow or shrink
    loop: true,                 // Circulate continuously
    zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation

});

$('.parent2').circulate({

speed: 200,                  // Speed of each quarter segment of animation, 1000 = 1 second
height: -300,                 // Distance vertically to travel
width: 120,                  // Distance horizontally to travel
sizeAdjustment: 100,         // Percentage to grow or shrink
loop: true,                 // Circulate continuously
zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation

});
$('.parent3').circulate({

speed: 600,                  // Speed of each quarter segment of animation, 1000 = 1 second
height: 300,                 // Distance vertically to travel
width: 120,                  // Distance horizontally to travel
sizeAdjustment: 100,         // Percentage to grow or shrink
loop: true,                 // Circulate continuously
zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation

});
});
