import Car from "../model/Car.js";
import ParkingLot from "../model/ParkingLot.js";

export default class ParkingService {
    constructor() {
        this.createParkingLot = (size) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`a new parking lot with the capacity of ${size} vehicle(s) has been created successfully`);
                    resolve(new ParkingLot(size));
                }, 5000);
            });
        };

        this.park = (parkingLot, car) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('testt', parkingLot);
                    if (parkingLot.slot.length < parkingLot.size) {
                        parkingLot.slot.push(car);

                        resolve(`${car.owner}'s car with plate number ${car.plateNum} has been parked successfully`);
                    } else {
                        reject('parking lot is full!');
                    }
                }, 3000);
            });
        };

        this.leave = (parkingLot, car) => {
            return new Promise((resolve, reject) => {
                if (parkingLot.slot.includes(car)) {
                    setTimeout(() => {

                        let index = parkingLot.slot.indexOf(car);
                        parkingLot.slot.splice(index, 1);

                        resolve(`a new parking lot with the capacity of ${size} vehicle(s) has been created successfully`);
                    }, 1500);
                } else {
                    reject('not found!');
                }
            });
        };
    }
}