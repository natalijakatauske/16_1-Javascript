// 1.Susikurkite konstruktorių car, kuris priims brand, model, engine ir
//turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir
//patikrinkite ar veikia.

// function Car(b, m, e) {
//     this.brand = b;
//     this.model = m;
//     this.engine = e;
//     this.turnOn = function() {
//         alert('VROOOOM')
//     }
// }
// const bmw = new Car('BMW', '530', 'electric')
// console.log(bmw.brand)
// document.body.innerText = bmw.brand + " " + bmw.model + " " + bmw.engine + " ir "


// const kia = new Car('KIA', 'Sportage', 'diesel')
// console.log(kia.brand)
// document.body.innerText += " " + kia.brand + " " + kia.model + " " + kia.engine

// console.log(kia.turnOn())


// 2.Pakoreguokite šį konstruktorių ir pridėkite papildomą property
//'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant
//objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė
//kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000;
//jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(b, m, e, bP) {
    this.brand = b;
    this.model = m;
    this.engine = e;
    this.basePrice = bP;
    this.getPrice = function() {
        let additionalPrice = 0;
        if (this.engine === "electric") {
            additionalPrice = 10000;
        } else if (this.engine === 'diesel') {
            additionalPrice = 5000;
        }
        return this.basePrice + additionalPrice
    }
}
const bmw = new Car('BMW', '530', 'electric', 35000)
console.log(bmw.brand)
document.body.innerText = bmw.brand + " " + bmw.model + " " + bmw.engine + " " + bmw.getPrice + " ir "


const kia = new Car('KIA', 'Sportage', 'diesel', 20000)
console.log(kia.brand)
document.body.innerText += " " + kia.brand + " " + kia.model + " " + kia.engine + " " + kia.basePrice

console.log(kia.getPrice())

console.log(bmw.getPrice())
