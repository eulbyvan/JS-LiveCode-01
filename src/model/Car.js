export default class Car {
    constructor(owner, plateNum) {
        this.owner = owner;
        this.plateNum = plateNum.toUpperCase();
    }
}