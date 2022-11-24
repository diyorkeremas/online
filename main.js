const elBlockList = document.querySelector(".block__list");
const elStoreList = document.querySelector(".store__list");
const Allprice = document.querySelector(".price-title");

const totalPrice = () => {
    const prices = storeList.reduce((a, b) => a + b.clientPrice, 0);
    Allprice.textContent = `${prices} $`;
};

const data = [
    {
        id: 1,
        img: "./2024-chevrolet-equinox-ev-3rs-front.jpg",
        price: 27000,
        count: 10,
        name: "Equnox",
    },
    {
        id: 2,
        img: "./4fdvjqg9j2mchrwl9j2c.jpg",
        price: 14000,
        count: 11,
        name: "Onix",
    },
    {
        id: 3,
        img: "./cattouchret.jfif",
        price: 9000,
        count: 12,
        name: "damas",
    },
];

const storeList = [];

function rednerProduct(item) {
    totalPrice();
    elBlockList.innerHTML = "";
    for (let i of item) {
        if (i.count > 0) {
            let li = document.createElement("li");
            li.className = "block__item";
            li.innerHTML = `
            <div class="block__img-wrapper">
            <img class="block__img" src="${i.img}" />
        </div>
        <div class="block__content">
            <h2 class="block__title">${i.name}</h2>
            <p class="product__price">${i.price}</p>
        <div class="wrap">
            <button class="block__add" id="${i.id}" type="button">-</button>
            <strong class="pop">${i.count}</strong>
            <button class="block__remove" id="${i.id}" type="button">+</button>
        </div>
        </div>
    `;
            elBlockList.appendChild(li);
        }
    }
}

rednerProduct(data);


function rednerProduct(item) {
    totalPrice();
    elBlockList.innerHTML = "";
    for (let i of item) {
        if (i.count > 0) {
            let li = document.createElement("li");
            li.className = "block__item";
            li.innerHTML = `
            <div class="block__img-wrapper">
            <img class="block__img" src="${i.img}" alt="Equnox" />
        </div>
        <div class="block__content">
            <h2 class="block__title">${i.name}</h2>
            <p class="product__price">${i.price}</p>
        <div class="wrap">
            <button id="${i.id}" class="block__add" type="button">+</button>
            <strong class="pop">${i.count}</strong>
            <button id="${i.id}" class="block__remove" type="button">-</button>
        </div>
        </div>
        `;
            elBlockList.appendChild(li);
        }
    }
}

rednerProduct(data);

function rednerStore(item) {
    elStoreList.innerHTML = "";
    for (let i of item) {
        if (i.count > 0) {
            let li = document.createElement("li");
            li.className = "block__item";
            li.innerHTML = `
        <div class="block__img-wrapper">
            <img class="block__img" src="${i.img}" alt="" />
        </div>
        <div class="block__content">
            <h2 class="block__title">${i.name}</h2>
            <p class="product__price">${i.clientPrice}$</p>
            <strong>${i.count}</strong>
        </div>
        `;
            elStoreList.appendChild(li);
        }
    }
}

elBlockList.addEventListener("click", (e) => {
    if (e.target.className === "block__add") {
        for (let i of data) {
            if (i.id === Number(e.target.id)) {
                let obj = storeList.some((find) => find.id == e.target.id);
                i.count -= 1;
                if (!obj) {
                    storeList.push({ ...i, clientPrice: i.price, count: 1 });
                } else {
                    for (let oldProduct of storeList) {
                        if (e.target.id == oldProduct.id) {
                            oldProduct.count += 1;
                            oldProduct.clientPrice = oldProduct.price * oldProduct.count;
                        }
                    }
                }
            }
        }
    }
    if (e.target.className === "block__remove") {
        for (let i of storeList) {
            if (i.id == e.target.id && i.count > 0) {
                i.count -= 1;
                i.clientPrice = i.price * i.count;
                for (let y of data) {
                    if (y.id == e.target.id) {
                        y.count += 1;
                    }
                }
            }
        }
    }
    rednerStore(storeList);
    rednerProduct(data);
});