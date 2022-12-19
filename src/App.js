import Car from "./model/Car.js";
import ParkingLot from "./model/ParkingLot.js";
import ParkingService from "./service/ParkingService.js";

function App() {
    console.log(new Car('test', 'test'));
    console.log(new ParkingLot(10));
    console.log(new ParkingService());
}

App();