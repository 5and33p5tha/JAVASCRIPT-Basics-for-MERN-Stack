//USER DEFINED FUNCTION FOR FIRST NAME
function fnameValidation(){
    let first_name=document.getElementById("fname") .value
    // CAN ALSO BE DONE AS CONST first_name=document.getElementById("fname") .value BUT BETTER TO USE LET IN FUNCTION
    if(first_name==""){
        display_msg("first name cannot be empty", "fname_message", "red")
        return false
        //return false indicated, if form validation fails, do not submit
    }

    else if(!first_name.match(/^([a-zA-Z])+$/)){
        display_msg("first name must be atleast 3 chatracters and ALPHABETS ONLY", "fname_message", "red")
        return false
        //return false indicated, if form validation fails, do not submit
    }

    else if(first_name.length<3){
        display_msg("first name must be atleast 3 chatracters", "fname_message", "red")
        return false
        //return false indicated, if form validation fails, do not submit
    }

    else{
        display_msg("Success! first name is valid", "fname_message", "green")
        return true
        //return false indicated, if form validation fails, do not submit
    }
}





//USER DEFINED FUNCTION FOR LAST NAME
// function lnameValidation(){


function formValidation(){
    if(fnameValidation() ){
    // if(fnameValidation() && lnameValidation &&...)
    return true}
    else{
        return false
    }
}





//The Below is our custom function which we have built so as to call function display_msg everytime we want to pass certain message
function display_msg(msg, id, color){
    document.getElementById(id).innerHTML=msg
    //HERE, ID IS REPLACED BY ID NAME WHEN ID VALUE IS PASSED. FOR INSTANCE, ID=fname_message IS THE ID FOR SPAN ID OF FNAME Which will pass the message there which will print it in SPAN
    document.getElementById(id).style.color=color
}