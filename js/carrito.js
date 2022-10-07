function fillTable() {
    var table = document.querySelector("table")

    for (let json in localStorage) {
        let object = localStorage[json]
        let strDrink = object.strDrink
        let strPrice = "$ 20.000"

        let row = table.insertRow()

        let cell_strdrink = row.insertCell()
        cell_strdrink.innerHTML = strDrink

        let cell_price = row.insertCell()
        cell_price.innerHTML = strPrice

        console.log(localStorage[json])
    }
}