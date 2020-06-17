import customers from './customers.js'


let person = [{
    thumbNail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
    name: "Pauline Hughes",
    email: "pauline.hughes@example.com",
    address: "3747 Elgin St, Roseville, IN 93281"
}]




function listCustomers(personArray) {
  let customerList = document.querySelector('#customer-list');
  for (let customer of customers) {
    let newCustomer = document.createElement("li");
    let customerText = document.createTextNode(`"${person.name}" located ${person.address}`);
    let customerImage = document.createElement("img")
    customerImage.src = `${person.thumbNail}`;
    let customerEmail = document.createElement("email");
    newCustomer.append(customerText, customerEmail);
    customerList.append(newCustomer);
    newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
  };
};

//listCustomers(person);





