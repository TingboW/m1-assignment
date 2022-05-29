
var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty element to store image file names
var imageList = []; //Declare an empty array to store html list taht contain an image
var image; //Declare an empty variable to store the assembled image list codes
var openList = "<li id = 'photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag


//Create a loop to create 15 images starting with index of 0
for (var i=0; i<15; i++){
    captionText = "Pet No. " + (i+1);
    fileNames.push("pet"+(i+1)); //Create image file name and store in the array
    photos.push("<img src='images/"+fileNames[i]+".jpeg'>"); //Assemble file name into image element and store in an array
    image = openList + photos[i] + "<div class='hiddenText'>Adopt today!</div>" + "<figcaption class='caption'>" + captionText + "</figcapton>" + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list codes into an array   
}
//Display all 15 image codes stored in the array
document.getElementById("album").innerHTML = imageList;

