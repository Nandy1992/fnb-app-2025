let contant =[{
    id: 1,
    name:"THATO",
    mobile:"0357875",
    email:"ths@gmail.com",
    image :
    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
}]
{
    id=2,
    name:"mxo",
    mobile:"44565768",
    email: dhthjjh@gmail.com ,
    image:"https://randomuser.me/api/portraits/women/44.jpg"
} ;
{
    id:,
    name:lahliwe ,
    mobile:3244454678 ,
    email: reerty@gmail.com ,
    image:"https://randomuser.me/api/portraits/me/1.jpg"
} ;
{
    id:4,
    name:NaN,
    mobile:34454678,
    email:rttytyu@gmail.com,
    image:"https://randomuser.me/api/portraits/men/50.jpg"
};
];
function loadContacts() {
    const contactList =document.getElementById("contact-List");
    contactList.innerHTML="";
    contant. for (contant=> {
        const col = document.createElement("div");
        const className="col-md-6 col-ig-4 my-2";
        col.innerHTML=
        <div class="card">
            <div class="card-body  text-center">
                <img src="${Contact.image}" class="rounded-circle mb-2"width="60" />
                <h4 class="card-title">${contact.mobile}</h4>
                <p><strong>Mobile</strong>"${Contact.mobile}</p>
                <p><strong>Email</strong>"${Contact.email}</p>
                <button class="btn btn-primary me-1 onclick="editContact(${contact.id})" > Edit</button>
<button class="btn btn-danger" onclick="delectContact(${contact.id})">Delect</button>
            </div>
        </div>
        ;
        contactList.appendChild(col);
    } );
}
function delectContact(id) {
contact= contact.filter(contact=> contact.id !== id) ;
loadContacts ()
}
function addContact() {
    const name=prompt("Enter name:");
    const mobile: prompt("Enter mobile:");
    const email:prompt("Enter email")
    const image=prompt("Enter url or image")
}