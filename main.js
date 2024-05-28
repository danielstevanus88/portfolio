
var header = document.querySelector("header");
var nav = document.querySelector("nav");
var menu_dropdown = document.querySelector(".menu-dropdown");
var menu_button = document.querySelector("#menu-button");
var menu_items = menu_dropdown.children;
document.addEventListener("scroll", function(e){
    let nav_items = nav.querySelectorAll("nav .flex-item a, nav .flex-item i");
    // console.log(nav_items);
    if(window.scrollY == 0){
        header.style.backgroundColor = "white";  

        for(let item of nav_items)
            item.style.color = "black";
        for(let item of menu_items)
            item.style.color = "black";

        header.style.opacity = 1;
    }
    else {
        header.style.backgroundColor = "black";  
        header.style.opacity = 0.8;
        for(let item of nav_items){
            item.style.color = "white";
            item.style.opacity = 1;
        }

        for(let item of menu_items){
            item.style.color = "white";
            item.style.opacity = 1;
        }
        
        
    }
});



menu_button.addEventListener("click", function(e){
    console.log(menu_dropdown.classList);
    
    
    if(menu_dropdown.classList.contains("menu-close")){
        for(item of menu_items){
            item.classList.add("menu-item-open");
            item.classList.remove("menu-item-close");
        }

        menu_dropdown.classList.add("menu-open");
        menu_dropdown.classList.remove("menu-close");

        
    }else {
        for(item of menu_items){
            item.classList.add("menu-item-close");
            item.classList.remove("menu-item-open");
        }
        
        menu_dropdown.classList.add("menu-close");
        menu_dropdown.classList.remove("menu-open");
        
    }

    
})

var project_boxes = document.querySelectorAll("#projects .grid");
console.log(project_boxes);
for (let box of project_boxes){
    box.addEventListener("mouseover", function(e){
        box.querySelector("a").hidden = false;
    });

    box.addEventListener("mouseout", function(e){
        box.querySelector("a").hidden = true;
    });
}