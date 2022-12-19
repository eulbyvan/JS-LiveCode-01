import Car from "./model/Car.js";
import ParkingService from "./service/ParkingService.js";

function App() {
    let parkingService = new ParkingService();
    let parkingLot = parkingService.createParkingLot(10);

    let car01 = new Car('stu', 'pid');

    parkingLot.then(p => {
        parkingService.park(p, car01)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    });
}

App();