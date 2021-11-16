module.exports.validateRegisterInput = (

    username,
    email,
    password,
    confirmPassword
)=>{
    //username cannot be empty
    const errors={};

    if(username.trim()===''){
        errors.username = 'username can not be Empty!!! '
    }
//Valid Email Address or field's not Empty
    if(email.trim()===''){
        errors.email = 'email can not be Empty!!! '
    }
    else{
        const  regEx= /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be a valid email address';
        }
    }

    if(password.trim()===''){
        errors.password = 'password can not be Empty!!! '
    }
    else if(password !==confirmPassword)
    {
        errors.confirmPassword = 'Passwords must match'
    }
    return{
        errors,
        valid:Object.keys(errors).length < 1
    };
    
};

//Login form

module.exports.validateLoginInput = (username,password)=>{
    const errors ={};
    if(username.trim()===''){
        errors.username = 'username can not be Empty!!! '
    }
    if(password.trim()===''){
        errors.password = 'password can not be Empty!!! '
    }
    return{
        errors,
        valid:Object.keys(errors).length < 1
    };
    
}

