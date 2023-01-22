class Regex
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobile;
    email;
constructor(firstName,lastName,address,city,state,zip,mobile,email)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.mobile = mobile;
    this.email = email;
}
Regex()
{

}
toString()
{
    return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", zip code : " + this.zip + ", Phone Number : " + this.mobile + ", email : " + this.email;
}
}
function firstNameRegex(firstName) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}

function lastNameRegex(lastName) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}

function addressRegex(address) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}

function cityRegex(city) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}

function stateRegex(state) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}

function zipRegex(zip) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}

function mobileRegex(mobile) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}

function emailRegex(email) 
{
    let input = prompt("Enter First-Name");
    let pattern = new RegExp("[a-zA-Z]+");
    let result = pattern.test(input);
    if(result == true)
    {
        console.log("Valid Pattern");
    }
    else
    {
        console.log("In-Valid Pattern");
    }
}
let Details = new Regex('Vignesh','waran','Erode','Erode','Tamil-Nadu','638056','73393-70023','vickyshanestark@gmail.com');
console.log(Details);