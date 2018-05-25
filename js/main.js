window.onload = function(){ 

    // Get the modal
 var modal = document.getElementById('myModal');
 var box = document.getElementById('myModal2');
var simply = document.getElementById('myModal3');
var d = document.getElementById('myModal4');

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 var btn2 = document.getElementById("myBtn2");
 var btn3 = document.getElementById("myBtn3");
 var btn4 = document.getElementById("myBtn4");

 // When the user clicks the button, open the modal 
 btn.onclick = function() {
     modal.style.display = "block";
    }

    btn2.onclick = function() {
        box.style.display = "block";
       }

       btn3.onclick = function() {
        modal.style.display = "block";
       }

       btn4.onclick = function() {
        modal.style.display = "block";
       }

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close");

 // When the user clicks on <span> (x), close the modal
 for(var each in span){
    span[each].onclick = function() {
        var parentModal = this.parentElement.parentElement;
        parentModal.style.display = "none";
     }
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }  

//Show expanded image when the non expanded image had been clicked
    document.getElementsByClassName("small-modal-image")[0].addEventListener('click', function (event) {
        console.log("it works!!!");
    document.getElementsByClassName("big-modal-image")[0].style.display = "block";


});


 };

