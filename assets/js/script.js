let tabs = document.querySelectorAll('#template_chooser_widget .tab');
if(tabs){

    tabs.forEach(h=>{
        h.addEventListener("click", function(){
            // Reset Data
            if(document.querySelector(".this_current_form")){
                // remove filled level color
                document.querySelector(".this_current_form .levels .two").classList.remove("filled");
                document.querySelector(".this_current_form .levels").classList.remove("line_levels");
                // hidding the form
                document.querySelector(".this_current_form .form_data").classList.add("d-none");

                // show the Images section
                var img_sec = document.querySelector(".hide_image_section");
                img_sec.classList.remove("d-none");
                img_sec.classList.remove("hide_image_section");

                // remvoe the class to get previous section
                document.querySelector(".this_current_form").classList.remove("this_current_form");
            }
            // end Reset Data

            document.querySelectorAll(".content-tabs").forEach(el=>{
                el.classList.add("d-none");
            });

            document.querySelectorAll("#template_chooser_widget .active").forEach(tab=>{
                tab.classList.remove("active");
            })
            this.classList.add("active");
            document.getElementById(this.getAttribute('data-tab')).classList.remove("d-none");
        });
    });

    // get all images
    let content_items = document.querySelectorAll("#template_chooser_widget .tabs-content .items .item");
    content_items.forEach(item=>{
        item.addEventListener("click", function(){
            // adding unique class on clicked image element
            this.classList.add("current_item");
            // Artificial Data-------------------------------------------------------------
            // get image url which is clicked
            const selected_img_url = document.querySelector("#template_chooser_widget .tabs-content .items .current_item img").getAttribute("src");
            // Hide the Images section
            this.parentElement.classList.add("hide_image_section");
            document.querySelector(".hide_image_section").classList.add("d-none");
            // add the class to get current form
            this.parentElement.parentElement.classList.add("this_current_form");
            // filled level color
            document.querySelector(".this_current_form .levels .two").classList.add("filled");
            document.querySelector(".this_current_form .levels").classList.add("line_levels");
            // showing the form
            document.querySelector(".this_current_form .form_data").classList.remove("d-none");

            // Reset Data
            this.classList.remove("current_item");


        });
        
    });

    prev_btn = document.querySelectorAll(".form_data .prev");

    prev_btn.forEach(btn=>{
            btn.addEventListener("click", function(){
                if(btn.parentElement.parentElement.parentElement.parentElement.classList.contains("this_current_form")){

                    // remove filled level color
                    document.querySelector(".this_current_form .levels .two").classList.remove("filled");
                    document.querySelector(".this_current_form .levels").classList.remove("line_levels");
                    // hidding the form
                    document.querySelector(".this_current_form .form_data").classList.add("d-none");

                    // show the Images section
                    var img_sec = document.querySelector(".hide_image_section");
                    img_sec.classList.remove("d-none");
                    img_sec.classList.remove("hide_image_section");

                    // remvoe the class to get previous section
                    document.querySelector(".this_current_form").classList.remove("this_current_form");
                }
            });
        
    })

    
}