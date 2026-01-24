window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */ console.log(document.querySelectorAll("p"));
/***OUTPUT: 
 * NodeList(9)
0
: 
p#1
1
: 
p#2.img-descript
2
: 
p#3.img-descript
3
: 
p#4.img-descript
4
: 
p#5.img-descript
5
: 
p#6.img-descript
6
: 
p#7.img-descript
7
: 
p#8.img-descript
8
: 
p#9.img-descript
length
: 
9
 * 
 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */ console.log(document.querySelector("p"));
/***OUTPUT: 
 * 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            
 * 
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */ console.log(document.querySelectorAll(".inner-container"));
/***OUTPUT: 
 * 0
: 
div.inner-container
1
: 
div.inner-container
2
: 
div.inner-container
3
: 
div.inner-container
4
: 
div.inner-container
5
: 
div.inner-container
6
: 
div.inner-container
7
: 
div.inner-container
 * 
 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */ console.log(document.querySelector(".img-container img:last-of-type"));
/***OUTPUT: 
 * <img class="img-image" src="task-2-images/sixteen.png">
 * 
 */


/*************************************** */
/* 5A: all h2 elements */
/* 5B: length of the list in 5A */
/* 5C: the text content of the first element in the list from 5A */
/***CODE */ let h2Elements = document.querySelectorAll("h2");
    console.log(h2Elements);
    console.log(h2Elements.length);
    console.log(h2Elements[0].textContent);
    console.log(h2Elements.item(0).textContent);
/***OUTPUT: 
 * 5A: length: 1
 * 5B: 1
 * 5C:  The header of this fancy page
 */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */ console.log(document.getElementById("parent"));
/***OUTPUT: 
 * script.js:5 we are a go!
script.js:9 NodeList(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
script.js:48 <p id=​"1">​…​</p>​
script.js:62 NodeList(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
script.js:94 <img class=​"img-image" src=​"task-2-images/​sixteen.png">​
script.js:106 NodeList [h2]
script.js:107 1
script.js:108  The header of this fancy page
script.js:119 <section id=​"parent">​flex<div class=​"inner-container">​…​</div>​<div class=​"inner-container">​…​</div>​<div class=​"inner-container">​…​</div>​<div class=​"inner-container">​…​</div>​<div class=​"inner-container">​…​</div>​<div class=​"inner-container">​…​</div>​<div class=​"inner-container">​…​</div>​<div class=​"inner-container">​…​</div>​</section>​
Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and press Enter to allow pasting.
Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and press Enter to allow pasting.

 * 
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


// /*************************************** */
// /*** START PART TWO MODIFY */ 
// /*************************************** */
// /* 1: Select the first paragraph and replace the text within the paragraph... */
// /***CODE */ document.querySelector("p").textContent = "New text in paragraph one: text changed by Yelena Arakelian on the following date: 1/22/2026";

// /*************************************** */
// /* 2: Select all elements in the HTML that have the class name content-container
//  and change the background color ... of first and second ...*/
// /***CODE */ document.querySelectorAll(".content-container")[0].style.backgroundColor = "orange";
//             document.querySelectorAll(".content-container")[1].style.backgroundColor = "purple";

// /*************************************** */
// /* 3: Change the src element of the first image element on the page to be ...
// /***CODE */ document.querySelector("img").src = "task-2-images/seven.png";

// /*************************************** */
// /* 4: Select the third paragraph element on the page and 
// replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
// /***CODE */ document.querySelectorAll("p")[2].innerHTML = "<h2>TEST 123</h2>";

// /*************************************** */
// /* 5: Select the fourth paragraph element on the page and 
// add to the existing content an h2 element containing the text `TEST 123`
// /***CODE */ document.querySelectorAll("p")[3].innerHTML += "<h2>TEST 123</h2>";

// /*************************************** */
// /* 6: Select the fifth paragraph element on the page and add to the existing content 
// an img element that holds `one.png`, and add the class newStyle to said paragraph element.
// /***CODE */ document.querySelectorAll("p")[4].innerHTML += '<img src="task-2-images/one.png">';
//             document.querySelectorAll("p")[4].classList.add("newStyle");


// /*************************************** */
// /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
// then access all elements with class name inner-container and save to a variable called `innerContainers`. 
// Next, iterate over the colors array, and for each color: 
// assign the element from innerContainers variable with the same index 
// (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
// a background using that color.
// /***CODE */ document.querySelectorAll(".inner-container");
//             let colors = ['red','blue','green','orange'];
//             let innerContainers = document.querySelectorAll(".inner-container");
//             for(let i = 0; i < colors.length; i++){
//                 innerContainers[i].style.backgroundColor = colors[i];

//                 }
            

// /*************************************** */
// /*** END PART TWO MODIFY */ 








/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1B: Create a function:function customCreateElement(parent){ //body } */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */

// 1A: 
let allPTagsThree = document.querySelectorAll("p");

// to see the variables
console.log(allPTagsThree) 

// 1B + 1C + 1D + 1E + 1F + 1G:
function customCreateElement(parent){
    // 1C: creates a new paragraph element
    let newParagraph =  document.createElement("p");

    // 1D: sets the text of this element
    newParagraph.textContent = "using create Element";

    // 1E: sets backgeound to green
    newParagraph.style.backgroundColor = "green";

    // 1F: sets text color to white
    newParagraph.style.color = "white";

    // 1G: appends new element to the parent variable
    parent.appendChild(newParagraph);

}

    // 1H: loop through all p tags and call customCreateElement
   for (let i = 0; i < allPTagsThree.length; i++){
    customCreateElement(allPTagsThree[i]);
}


/***EXPLANATION::
 *  A loop was created to go through all paragraph elements on the page. The same function
 * is reused to create a new p tag with specified styles and text content, and append it to each existing paragraph.
 * Based on the remainder, the new paragraph is styled with a green background and white text. 
 * Also, the text content is set to "using create Element".
 */ 





/*************************************** */
/* 2: GRID OF BOXES */ 
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */

// 2A + 2B + 2C + 2D:
function customNewBoxCreate(parent){
    // 2B: create new div element with class testDiv
    let newDiv = document.createElement("div");
    newDiv.classList.add("testDiv");
    
    // 2C: append new element to the parent variable
    parent.appendChild(newDiv); 

    // 2D: return this new element
    return newDiv;
}

// 2E + 2F + 2G + 2H:
let gridParent = document.getElementById("new-grid");
let rows = 10;
let cols = 10;
let boxSize = 50; // size of each box

for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
        let returnedDiv = customNewBoxCreate(gridParent);

        returnedDiv.style.position = "absolute";
        returnedDiv.style.width = boxSize + "px";
        returnedDiv.style.height = boxSize + "px";
        returnedDiv.style.left = (col * boxSize) + "px";
        returnedDiv.style.top = (row * boxSize) + "px";

        if (row % 2 == 0) { // checks if row is even
            returnedDiv.style.backgroundColor = "white";
            returnedDiv.textContent = "EVEN";
        } else {
            returnedDiv.style.backgroundColor = "purple";
            returnedDiv.style.color = "white";
            returnedDiv.textContent = "ODD";
        }
    }
}

/***EXPLANATION::
    * A nested for loop was created to generate a 10x10 grid of div elements. Each div is styled to have a specific size and position based on its row and column position. An if stament was used ti change the background color and text to EVEN or ODD based on wether the row number is even or odd.
    * 
    * 
    * 
 */






/*************************************** */
/* 3: GRID OF BOXES II */ /*Bonus..Won't do it */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */


/***EXPLANATION::
 * 
 * 
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
}




