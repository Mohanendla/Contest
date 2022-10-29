let globalIsSubmitted = false
    
function validate(isSubmitted = false) {
    let fullName = document.getElementById('full-name').value
    let position = document.getElementById('position').value
    let Skill1 = document.getElementById("java").checked
    let Skill2 = document.getElementById("html-css").checked
    let Skill3 = document.getElementById("Javascript").checked
    let Skill4 = document.getElementById("react").checked
    let error = false
   
if(isSubmitted){ 
    globalIsSubmitted = true
}
// full name validation
   
if((fullName.length >=5) && (fullName.includes(' '))) {
      document.getElementById('full-name-valid').style.display = 'block'
      document.getElementById('full-name-invalid').style.display = 'none'
    
    } else {
      document.getElementById('full-name-invalid').style.display = 'block'
      document.getElementById('full-name-valid').style.display = 'none'
      error = true
    }

// position validation

  if(position!= 'None'){
    document.getElementById('position-valid').style.display = 'block'
    document.getElementById('position-invalid').style.display = 'none'
  } else {
    document.getElementById('position-invalid').style.display = 'block'
    document.getElementById('position-valid').style.display = 'none'
    error = true
  }
 // skill validation 

  if(Skill1 || Skill2 || Skill3 || Skill4) {
    document.getElementById('skill-valid').style.display = 'block'
    document.getElementById('skill-invalid').style.display = 'none'
   
 } else {
   document.getElementById('skill-invalid').style.display = 'block'
   document.getElementById('skill-valid').style.display = 'none'
   error = true
 }
  
  let alertMessage = `Skills of ${fullName}(${position}) are `
    if(Skill1){
      alertMessage = alertMessage + 'Java';
    }
    if(Skill2){
      alertMessage = alertMessage + ' HTML & CSS';
    }
    if(Skill3){
      alertMessage = alertMessage + ' JavaScript';
    }
    if(Skill4){
      alertMessage = alertMessage + ' React';
    }


if(!error && isSubmitted){
    alert(alertMessage)
    document.getElementById("registration-form").reset();
            let validFeedback = document.getElementsByClassName("valid-feedback");
        for (i = 0; i < validFeedback.length; i++) {
        validFeedback[i].style.display = "none";
        }
        let invalidFeedback = document.getElementsByClassName("invalid-feedback");
        for (i = 0; i < invalidFeedback.length; i++) {
        invalidFeedback[i].style.display = "none";
        }
        }
    }
 
  
  


