import ParkingLot from "../model/ParkingLot.js";

export default class ParkingService {
    constructor() {
        this.createParkingLot = (size) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`a new parking lot with the capacity of ${size} car(s) has been created successfully`);
                }, 5000);
                resolve(new ParkingLot(size));
            });
        };
        this.park = () => { };
        this.leave = () => { };
        this.check = () => { };
    }
}