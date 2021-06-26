

/**
 * Update the output text as a user types in the textarea
 *  Used the onkeydown function inside HTML
 */
 function updateText(){
    // CODE GOES HERE
    let text=document.getElementById("text-input").value;
   document.getElementById("text-output").innerText=text;
  }
  
  /**
    Toggle the bold class for the output text
   */
  function makeBold(elem){
    
    
     var element=document.getElementById("text-output");
      element.classList.toggle("bold");
     elem.classList.toggle("active");
   
  }
  
  /**
   * Toggle the italic class for the output text
   */
  function makeItalic(elemit){
    var element=document.getElementById("text-output");
    element.classList.toggle("italic");
   elemit.classList.toggle("active");
 
  }
  
  /**
   * Toggle the underline class for the output text
   */
  function makeUnderline(elem){
      elem.classList.toggle("active");
     let element=document.getElementById("text-output");
      if (element.classList.contains("underline")) {
        element.classList.remove("underline");
      }else{
        element.classList.add("underline");
      }
  }
  
  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   */
  function alignText(elem, alignType){
  
  document.getElementById('text-output').style.textAlign=alignType;
  let classlist=document.getElementsByClassName('align');
  for (let i = 0; i < classlist.length; i++) {
    classlist[i].classList.remove("active");
  }
  elem.classList.toggle("active");
  };