//When I click in the "increment" button I want to increment by one a counter which will be displayed in the <p> element. 
    // create variable to store the counter and set it to 0
    
    let counter = 0;
    console.log(counter)
        // Create an onclick event in the increment button -- DONE

    //select the <p> element by its ID to render the counter.
    
    let p = document.getElementById("count-El")
    
    //create the function for the onclick that will increase the counter by 1 and render the value in the p element
        
    function incrementByOne(){
       counter += 1;
       p.innerText = counter
    }