import { Burger } from "../models/Burger.js";

class BurgerDB {
    burgers = [
        new Burger({id: 1, name: 'Bacon Burger', hasLettuce: true, hasBacon: true, hasTomato: true, price: 10.25}),
        new Burger({id: 2, name: 'Vegan Burger', hasLettuce: true, hasBacon: false, hasTomato: true, price: 8.00}),
        new Burger({id: 3, name: 'Plain Burger', hasLettuce: false, hasBacon: false, hasTomato: false, price: 2.25}),
    ]
}

export const burgerDB = new BurgerDB()