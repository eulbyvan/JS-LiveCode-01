import Car from "./model/Car.js";
import ParkingService from "./service/ParkingService.js";

function App() {
    let parkingService = new ParkingService();

    let parkingLot = parkingService.createParkingLot(10);

    parkingLot.then(p => {
        parkingService.park(p, new Car('stu', 'pid'))
            .then(msg => console.log(msg))
            .catch(msg => console.log(msg));
    });
}

App();