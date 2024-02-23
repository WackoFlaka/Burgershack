import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";

export class BurgerController extends BaseController {
    constructor() {
        // REVIEW adding a super will allow us to send request to http://localhost:3000/api/burgers. 
        super('api/burgers')
        
        this.router
        
        .get('', this.getBurger)
        .get('/:burgerId', this.getId)
        .post('', this.createBurger)
        .delete('/:burgerId', this.removeBurger)
    }
    
    
    
    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    getBurger(request, response, next) {
        try {
            response.send('Welcome to Burgershack! Take a seat!')
            const burgers = burgerService.getBurger()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    
    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    getId(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = burgerService.getId(burgerId)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
    
    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    createBurger(request, response, next) {
        try {
            const data = request.body
            const burger = burgerService.createBurger(data)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
    /**
     * @param {import("express").Request} request
     * @param {import("express").Response} response
     * @param {import("express").NextFunction} next
     */
    
    removeBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const message = burgerService.removeBurger(burgerId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }
}