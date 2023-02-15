class Bag {
    static maxWeight = 23;
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } 
        if(weight > Bag.maxWeight) {
            throw new Error(`too heavy`)
        }
        this.weight = weight
    }
}

module.exports = Bag