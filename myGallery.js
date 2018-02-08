// JavaScript Document

//Instructions
//Make an img tag with ID 'myGalleryImage'
//Create two buttons with the attribute 'onclick="change(direction)"'
//Change the parameter 'direction' on the attribute to '1' for your next picture button. And '0' for your previous picture button.
//Create a folder for you gallery. (I would recommend inside your 'images' folder and calling it 'Gallery')
//If you want to put the pictures in a different place, then change the path 'Images/Gallery/' in all 4 if & else statements.
//All pictures MUST be named 'Picture_$.png' ($ = numerical value. Replace '$' with the where in the gallery you want it to be shown(first picture must be have the number '0'))

//NOTES
//This script is designed for PNG pictures. And would need modification for use with JPEG.
//This script is not designed for change pictures that are set using 'URL' attribute. And would require modification.

/*--- Variables ---*/
//Amount of pictures in gallery.
//The value needs to be one lower than the amount of pictures in the gallery.
//E.g. If you got 3 pictures you'd set the value of 'aPicture' to '3'
//NOTICE picture ID starts at '0'and not '1' First picture being '0'
var aPicture = 2;

//Function for removing the path of the file 
function basename(path) {
    return path.split('/').reverse()[0];
 }

 //Fucntion for changing the picture
function change(dir){

    //Variable used for storing the string for changing the picture.
    var pic;

    //Creates a variable called 'sw' as a string.
    //Then looks for the element with the ID 'myGalleryImage' and sets 'sw' to the src of the element with ID 'myGalleryImage'
    var sw = document.getElementById('myGalleryImage').src

    //Runs the basename function. And tells it to remove the path from the 'sw' string.
    sw = basename(sw);

    //Removes the path extension of 'sw'
    sw = sw.replace(/\D/g,'');

    //Chanes the 'sw' variable to an integer
    sw = parseInt(sw);

    //If the parameter given to the function is 1 then the if statement below is run.
    //Changes the picture to the next picture in the list.
    if(dir == 1){
        if (sw < aPicture){
            sw += 1;
            pic = "Images/Gallery/Picture_" + sw + ".png"
        } else {
            sw = 0;
            pic = "Images/Gallery/Picture_" + sw + ".png"
        }
    } 

    //If the parameter given to the function is 0 then the if statement below is run.
    //Changes the picture to the previous picture in the list.
    if (dir == 0){
        if (sw > 0){
            sw -= 1;
            pic = "Images/Gallery/Picture_" + sw + ".png"
        } else {
            sw = aPicture;
            pic = "Images/Gallery/Picture_" + sw + ".png"
        }
    }

    //Changes the source of pictures with ID 'myGalleryImage' to the path stored in 'pic'.
    document.getElementById('myGalleryImage').src = pic;
}