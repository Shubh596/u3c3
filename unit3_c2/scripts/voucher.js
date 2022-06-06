async function getData() {

    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

    let res = await fetch(url)

    let data = await res.json()
    console.log(data)
    appendData(data[0].vouchers)
}
getData()

function appendData(data) {

    let container = document.querySelector(".voucher")


    data.forEach(function (ele) {
        let div = document.createElement("div")
        div.setAttribute("class", "voucher_list")

        let photo = document.createElement("img");
        photo.src = ele.image

        let h2 = document.createElement("h2");
        h2.innerText = ele.name;

        let h4 = document.createElement("h4")
        h4.innerText = ele.price

        let butn = document.createElement("button")
        butn.innerText = "Buy";
     


        div.append(photo, h2, h4, butn)
        container.append(div)
    })
}