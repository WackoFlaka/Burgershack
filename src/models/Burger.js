// Burger.js 
export class Burger {
    constructor (data) {
        this.id = data.id
        this.name = data.name || 'Burger'
        this.hasLettuce = data.hasLettuce || true
        this.hasBacon = data.hasBacon || true
        this.hasTomato = data.hasTomato || true
        this.price = data.price || 5.00
    }
}