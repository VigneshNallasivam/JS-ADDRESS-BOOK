class Pojo
{
        firstName;
        lastName;
        address;
        city;
        state;
        mobile;
        email;
    constructor(firstName,lastName,address,city,state,mobile,email)
    {
        this.firstName;
        this.lastName;
        this.address;
        this.city;
        this.state;
        this.mobile;
        this.email;
    }
    Pojo()
    {

    }
    
    toString()
    {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", zip code : " + this.zip + ", Phone Number : " + this.mobile + ", email : " + this.email;
    }


}