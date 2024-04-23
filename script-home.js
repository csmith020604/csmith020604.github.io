 const text = document.getElementById("span1");
 const button = document.getElementById("span2");
 const button_2 = document.getElementById("span3");
 const s3 = document.getElementById("Screen-3")
 const lp_img = document.getElementById("lp-img1");
 const lp_name = document.getElementById("lp_name");
 const lp_h2name = document.getElementById("lp_h2name");
 const su_h2 = document.getElementById("su_h2")
 const su_list = document.getElementById("list");
 const resume = document.getElementById('resume');

function show_Text(){
    text.style.display = "flex";
    button.style.display = "none";
    button_2.style.display = "inline";
    s3.style.top = "200%";
    s3.style.height = "100%";
    lp_h2name.style.top = "20%"
    lp_h2name.style.fontSize = "2.5rem";
    lp_h2name.style.left = "18%";
    lp_img.style.top = "30%";
    su.style.top = "20%";
    su_h2.style.top = "20%";
    su_list.style.top = "27%";
    su_h2.style.fontSize = "2.5rem";
    su_list.style.right = "27%"; 
}

function hide_Text(){
    text.style.display = "none"
    button.style.display = "inline";
    button_2.style.display = "none";
    s3.style.top = "130%";
    s3.style.height = "70%";
    lp_h2name.style.top = "10%";
    lp_h2name.style.fontSize = "2rem";
    lp_h2name.style.left = "20%";
    lp_img.style.top = "25%";
    su_h2.style.top = "10%";
    su_list.style.top = "20%";
    su_h2.style.fontSize = "2rem";
    su_list.style.right = "25.5%"; 
}

lp_img.onmouseover = function(){
    lp_img.style.filter = "blur(4px)";
    lp_name.style.display = "flex";
}

lp_img.onmouseout = function(){
    lp_img.style.filter = "none";
    lp_name.style.display = "none";
}

lp_name.onmouseover = function(){
    lp_img.style.filter = "blur(4px)";
    lp_name.style.display = "flex";
}

lp_name.onmouseout = function(){
    lp_img.style.filter = "none";
    lp_name.style.display = "none";
}

function openResume(){
    
}