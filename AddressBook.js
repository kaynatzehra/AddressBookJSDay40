const nameRegex = new RegExp ('^[A-Z]{1}[a-z]{3,}$');
const addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-Z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp('^\\d{2}(\\s{1}\\d{10})$');
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[-.+ _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw new Error ("First Name : '" + firstName + "' is Invalid!");
    }

    get lastName() {
        return this._lastName;
    }
    
    set lastName(lastName) {
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw new Error ("LAST NAME is Incorrect ");
    }

    get address() {
        return this._address;
    }

    set address(address) {
        if (addressRegex.test(address))
            this._address = address;
        else
            throw new Error( "ADDRESS is Incorrect");
    }

    get city() {
        return this._city;
    }

    set city(city) {
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw new Error("CITY is Incorrect");
    }

    get state() {
        return this._state;
    }

    set state(state) {
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw new Error("STATE is Incorrect");
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw new Error ("ZIP is Incorrect");
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw new Error ("PHONE NUMBER is Incorrect");
    }

    get email() {
        return this._email;
    }

    set email(email) {
        if (emailRegex.test(email))
            this._email = email;
        else
            throw new Error ("EMAIL ADDRESS is Incorrect");
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}

let addressBookArray = new Array();
function contactExists(firstName, lastName) {
    return addressBookArray.some(contact => contact.firstName == firstName && contact.lastName == lastName);
}

function editContact(firstName, lastName, property, newValue) {
    if (contactExists(firstName, lastName)) {
        switch (property) {
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    } else {
        console.log("Contact Does Not Exist");
    }
}

function deleteContact(firstName, lastName) {
    if (contactExists(firstName, lastName)) {
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
        console.log(firstName + " " + lastName + "  Contact Deleted");
    } else {
        console.log("Contact Does Not Exist");
    }
}

function countContacts(contactArray){
    let count= contactArray.reduce((a, b) => a.concat(b), []).length;
    console.log("Number of contacts is: "+count);
 }

 function addContact(addressBookArray,firstName,lastName){
    if(addressBookArray.find((contact)=>(contact.firstName+" "+contact.lastName)==(firstName+" "+lastName))){   
        console.log("Given contact already present in addressbook.");
    }
    else{
        try{
            addressBookArray.push(new Contact(firstName,lastName,'Vidyanagar','Davangere','Karnataka',577004,'91 7894036987','kavya@gmail.com'));
            
            console.log("Contact is added. ");
        }catch(Exception){
            console.log(Exception);
        }
        
    }
}
function searchByCityOrState(contactArray,cityorstate){
    if(cityorstate == "Bangalore"){
        console.log("Contact by city");
        contactArray.filter(name => name.city == cityorstate).forEach(contact=>console.log(contact.toString()));
    }
    if(cityorstate == "Karnataka"){
        console.log("Contacts by state");
        contactArray.filter(name => name.state == cityorstate).forEach(contact=>console.log(contact.toString()));
    }
}

function isPresentInState(contactArray,name,stateName){
    console.log('View person contact by state');
   let contact=contactArray.filter(a => a.state == stateName).find(b => b.firstName==name);
   console.log(contact.toString());
}

function isPresentInCity(contactArray, name, cityName) {
    console.log('View person contact by city');
   let contact=contactArray.filter(a => a.city == cityName).find(b => b.firstName==name);
   console.log(contact.toString());
    
}
try {
    addressBookArray.push(new Contact("Nayana", "Ksss", "Vidyanagar", "Davangere", "Karnataka", 577004, "91 7896543210", "nayu@gmail.com"));
} catch (e) {
    console.error(e);
}

try {
    addressBookArray.push(new Contact("Priya", "Kolur","leninnagar", "Davangere", 'Karnataka', 577004, '91 6784563210', "priya@gmail.com"));
} catch (e) {
    console.log(e);
}
console.log(addressBookArray);
console.log("\nAfter Editing Contact")
editContact("Ana", "Singh", "city", "Ghaziabad");
editContact("Ana", "Singh", "state", "UP");
editContact("Ana", "Singh", "address", "India");
console.log(addressBookArray);

deleteContact("Ana", "Singh");
console.log(addressBookArray);
countContacts(addressBookArray);
addContact(addressBookArray,"Shivani", "Kasaudhan");
console.log(addressBookArray);
searchByCityOrState(addressBookArray,'Davangere');
searchByCityOrState(addressBookArray,'Karnataka');
isPresentInState(addressBookArray,"Kaynat","UP");
isPresentInCity(addressBookArray,"Shivani","Bangalore");