
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cpwd = document.getElementById('confirm_password');
let create = document.querySelector('button');

let rowData = document.getElementById('row-data');
let successCreated = document.getElementById('success-created');
let deletedRow = document.getElementById('failed-created');



function checkValid()
{
    //for username
    if(username.value.trim() === '' || username.value.length <= 2 || username.value.length >= 10 )
    {
        onError( username , 'invalid username' );
    } 
    else 
    {
        if ( !validateUsername( username.value ) )
        {
            onError( username , 'username does not contain at least one upper/lower character and must not contain any number' ); 
        }
        else
        {
            onSuccess( username );
        }
    }
    //for username

    //for email
    if(email.value.trim() === '' || email.value.length >= 30 )
    {
        onError( email , 'invalid email' )
    } 
    else 
    {
        if( !validateEmail( email.value ) ){
            onError( email , ' invalid email ' )
        }else{
            onSuccess( email );
        }
    }
    //for email

    //for password
    if( password.value.length <= 2 || password.value.length >= 20 || password.value.trim() == '' ) 
    {
        onError( password , ' invalid password ' );
    } 
    else 
    {
        if( !validatePassword(password.value.trim()))
        {
            onError( password , ' password does not contain at least one upper/lower character or one number ' );
        }
        else 
        {
            onSuccess( password );
        }
        
    }
    //for password

    //for confirm password
    if( cpwd.value.trim() === '' ) 
    {
        onError( cpwd , ' invalid password ' );
    } 
    else 
    {
        if( password.value.trim() !== cpwd.value.trim() ) 
        {
            onError( cpwd , ' this feild must fill like password ' );
        } 
        else 
        {
            onSuccess( cpwd );
        }
    }
    //for confirm password
}


//set data-created in table
function setData ()
{
    if ( //check that all data had filled
        username.value != '' && email.value != '' && password.value != '' && cpwd.value != '' 
        && validateUsername( username.value ) && validateEmail( email.value ) && validatePassword( password.value ) 
       )  //check that all data had filled
       
      {
        let newRow = document.createElement('tr');

        newRow.innerHTML = 
                "<td>" + username.value + "</td>" +
                "<td>" + email.value+"</td>" +
                "<td>" + password.value + "</td>" +
                "<td>" + "<button delete>" + 'Delete' + "</button>" + "</td>";
    
        rowData.appendChild( newRow );
    
        successCreated.style.display = 'block';
    
        setTimeout ( ()=> 
        {
            successCreated.remove();
        } , 3000 );
    
      }
    
}
//set data-created in table


//delete row
function deleteRow () {

    let del = document.querySelectorAll('[delete]');

    del.forEach ( elem =>{

        elem.addEventListener( 'click' , () => {
            
            elem.parentElement.parentElement.remove();
            deletedRow.style.display = 'block';
            setTimeout ( () => 
            {
                deletedRow.remove();
            }, 4000 );

        });
    });
}

//delete row


create.addEventListener('click',(e)=>{
    checkValid ();
    setData ();
    deleteRow ();
    e.preventDefault ();
})



//functions for validaton
function onSuccess ( input ) {

    let parent = input.parentElement;
    let message = parent.querySelector('small');
    message.innerText = '';
    input.classList.add('valid-input');
    input.classList.remove('invalid-input');

}
function onError ( input , errorMessage ) {

    let parent = input.parentElement;
    let message = parent.querySelector('small');
    message.innerText = errorMessage;
    input.classList.add('invalid-input');
    input.classList.remove('valid-input');

}
function validateUsername(user)
{
    const name =  /^[a-zA-Z\-]+$/;
    return name.test(user);
}
function validateEmail(myEmail) {
    const valid =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return valid.test(String(myEmail).toLowerCase());
}
function validatePassword(pass){
    var pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    return pwd.test(pass);
}
//functions for validaton