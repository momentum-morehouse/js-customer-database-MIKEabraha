import customers from './customers.js'


let person = [{
    thumbNail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
    name: "Pauline Hughes",
    email: "pauline.hughes@example.com",
    address: "3747 Elgin St, Roseville, IN 93281"
}]


function capital(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function listCustomers(personArray) {
    let customerList = document.querySelector('#customer-list');
    console.log(customerList)


    for (let customer of customers) {

        let newCustomer = document.createElement("div");

        let customerText = document.createTextNode(`${capital(customer.name.title)} ${capital(customer.name.first)} ${capital(customer.name.last)}`);

        let customerDob = document.createTextNode(`Date of Birth: ${customer.dob}, Date Joined: ${customer.registered}`);



        let customerAddress = document.createTextNode(`${capital(customer.location.street)} ${capital(customer.location.city)},${capital(customer.location.state)}`);

        let customerEmail = document.createTextNode(`${customer.email}`);


        let name = document.createElement("p");
        let address = document.createElement("p");
        let email = document.createElement("p");
        let dob = document.createElement("p");

        address.classList.add("address", "measure", "lh-copy");
        email.classList.add("email", "measure", "2h-copy");

        newCustomer.appendChild(customerText);
        email.appendChild(customerEmail);
        address.appendChild(customerAddress);
        dob.appendChild(customerDob);
        newCustomer.append(address, email);

        let customerImage = document.createElement("img");
        customerImage.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2");
        customerImage.src = `${customer.picture.thumbnail}`;

       
        newCustomer.append(name, email, address, dob);
        newCustomer.prepend(customerImage);
        //newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
        customerList.append(newCustomer);


    };



}

listCustomers(person);



