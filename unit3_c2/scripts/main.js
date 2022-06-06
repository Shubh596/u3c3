
document.getElementById("form").addEventListener("submit", myFunction)

function myFunction(event) {
    event.preventDefault();

    let a = JSON.parse(localStorage.getItem("user")) || [];

    let obj = {
        name :document.getElementById("name").value,
        email: document.getElementById("email").value,
       address:  document.getElementById("address").value,
        amount:document.getElementById("amount").value
    }
    
    a.push(obj)
    console.log(a)

    localStorage.setItem("user", JSON.stringify(a))

}
    