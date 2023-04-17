

class Product {
    constructor(title, price, description, image) {
        this.title = title
        this.price = price
        this.description = description
        this.image = image
    }


}


function render() {

    arrData.map(element => {

        let sdcard = document.getElementById("student-card");
        let divContainer = document.createElement('div');
        divContainer.classList.add("card");
        let stdImage = document.createElement('img');
        stdImage.src = `${element.image}`
        divContainer.appendChild(stdImage);
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        li1.textContent = `Title: ${element.title}`;
        let li2 = document.createElement("li");
        li2.textContent = `Description: ${element.description}`;
        let li3 = document.createElement("li");
        li3.textContent = `Price: ${element.price}`;

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        divContainer.appendChild(ul);
        sdcard.appendChild(divContainer);


    });

}



let arrData = [];
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {

        json.forEach(element => {
            let product_ = new Product(element.title, element.price, element.description, element.image)
            arrData.push(product_)


        });


        render()

    })

