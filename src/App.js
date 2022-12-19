import Car from "./model/Car.js";
import ParkingService from "./service/ParkingService.js";

function App() {
    let parkingService = new ParkingService();

    let parkingLot = parkingService.createParkingLot(10);

    parkingLot.then(parkinglot => console.log(parkingLot));
}

App();