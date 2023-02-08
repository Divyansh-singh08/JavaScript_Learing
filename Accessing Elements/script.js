var demoId = document.getElementById("demo");
demoId.style.border = "1px solid green";

var demoClass = document.querySelectorAll(".demo");

demoClass[0].style.border = "1px solid blue";
demoClass[1].style.border = "1px solid blue";

demoClass[1].innerText = "Second Elements of Class";
