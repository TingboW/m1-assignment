
var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list taht contain an image
var image; //Declare an empty variable to store the assembled image list codes
var openList = "<li id = 'photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var textArray = ["Malcolm gets over stimulated if petted for too long, but he is no longer aggressive.He loves looking out the window from his cat tree",
"Our names are Teeny (girl) and Winky (boy). We are sweet bonded orange tabby siblings with lots of love, snuggles, and head buts to offer.",
"Remi loves to go outside, and go visit with the neighbor dogs. She will likely be happiest as an indoor/outdoor kitty.",
"Oso is a little shy with people at first, but he will immediately “sit” and do what you say for a treat -- he is so smart!",
"Hibiki loves the outdoors, playing ball, chasing squirrels, carrots, and kisses; knows sit, wait, down, and high-five; and is crate- and house-trained.",
"Jelly is extremely sweet and loves a long petting or play session when she is comfortable with someone.",
"Tasha has been the only cat in the home and was rightfully spoiled. That is all that her heart desires again.",
"Audrey is a very bright. She is very friendly to people without fear or unfamiliarity. She expresses her joy with her whole body when she meets people.",
"Yeti and Cabbage like to aid and abet each other in mischief. One will usually keep watch while the other attempts to get to the treat jar and they love playing hide and seek.",
"Maggie is a tiny girl, and a bit shy, but she loves to be pet and brushed.",
"Charlotte loves people so much that she can't leave them. She gets along well with other dogs.",
"Kirk and Spock are very playful, curious, and loving towards each other. They enjoy napping together and are often found cuddling and grooming each other.",
"Mirri is a shy and sweet and extremely playful little girl who absolutely loves affection and kisses.",
"Simba is very special and loving guy. He is great with children and have been formally trained.",
"Basil is very friendly and loves people. He's playful and loves to play fetch."
];

//Create a loop to create 15 images starting with index of 0
for (var i=0; i<15; i++){
    captionText = "Pet No. " + (i+1);
    fileNames.push("pet"+(i+1)); //Create image file name and store in the array
    photos.push("<img src='images/"+fileNames[i]+".jpeg'>"); //Assemble file name into image element and store in an array
    image = openList + photos[i] + "<div class='hiddenText' onclick='on(" + i + ")'>Adopt today!</div>" + "<figcaption class='caption'>" + captionText + "</figcapton>" + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list codes into an array   
}
//Display all 15 image codes stored in the array
document.getElementById("album").innerHTML = imageList;

function on(i) {
    document.getElementById("overlay").style.display = "block";
    var str = "<p>" + textArray[i] + "</p>";
    document.getElementById("text").innerHTML = "<h2 id='dis'>Pet " + (i+1) + ":</h2>" +
        str + "<div id='closeBtn' onclick='off()'>Click Window</div>";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}