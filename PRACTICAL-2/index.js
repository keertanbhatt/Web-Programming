function validate() {
    // First Name 
    var fname = document.reg_form.fname;
    if (fname.value.length <= 0) {
        alert("Name is required");
        fname.focus();
        return false;
    }

    if(!isNaN(fname.value))
    {
        alert("Please Enter only characters");
        fname.focus();
        return false;
    }
    
    // Last Name
    var lname = document.reg_form.lname; 

    if (lname.value.length <= 0) {
        alert("Last Name is required");
        lname.focus();
        return false;
    }
    if(!isNaN(lname.value))
    {
        alert("Please Enter only characters");
        lname.focus();
        return false;
    }
    //course
    var course = document.reg_form.course;    
    if (course.value == "select") {    
        alert("Course is required");    
        course.focus();    
        return false;    
    }  
    
    //gender
    var gender = document.reg_form.gender;

    if (gender.value.length ==0){
        alert("Please choose a gender");
        gender.focus();
        return false;
    }
    
    // Phone
    var phone = document.reg_form.phone;
    var phnum = /^\d{10}$/;
    if(!phone.value.match(phnum))
    {
        alert("Please enter valid 10 digit mobile number!");
        phone.focus();
        return false;
    }

    // Address
    var address = document.reg_form.address;
    if(address.value <=0)
    {
        alert("Please Enter a valid Address!");
        address.focus();
        return false;
    }
    // Email
    var email = document.reg_form.email;  

    if (email.value.length <= 0) {    
        alert("Email cant be empty!");    
        email.focus();    
        return false;    
    }    


}