function Validation(inputs) {

    let error = {}

    //const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    //const password_pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(inputs.email === "") {        
        error.email = "Name should not be empty"    
    }  else {        
        error.email = ""    
    }

    if(inputs.password === "") {        
        error.password = "Password should not be empty"    
    }     else {        error.password = ""    }   
     return error;}

export default Validation;