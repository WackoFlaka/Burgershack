import { burgerDB } from "../db/BurgerDB.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgerService {
    removeBurger(burgerId) {
        const index = burgerDB.burgers.findIndex(burger => burger.id == burgerId)
        if(index == -1) {
            throw new BadRequest(`${burgerId} not a valid id`)
        }
        burgerDB.burgers.splice(index, 1)
        return 'Burger has been removed!'
    }
    createBurger(data) {
        const newBurger = new Burger(data)
        
        const lastBurger = burgerDB.burgers[burgerDB.burgers.length - 1]
        newBurger.id = lastBurger.id + 1
        burgerDB.burgers.push(newBurger)
        return newBurger
    }
    
    getId(burgerId) {
        const foundBurger = burgerDB.burgers.find(burger => burger.id == burgerId)
        if(!foundBurger) {
            throw new BadRequest(`${burgerId} not a valid id`)
        }
        
        return foundBurger
    }
    getBurger() {
        const burger = burgerDB.burgers
        return burger
    }
}

export const burgerService = new BurgerService()