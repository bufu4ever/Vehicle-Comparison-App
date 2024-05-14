import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-vehicle-comparison',
  templateUrl: './vehicle-comparison.component.html',
  styleUrls: ['./vehicle-comparison.component.css']
})
export class VehicleComparisonComponent implements OnInit {
  vehicles: any[] = []; 
  selectedVehicle1: any;
  selectedVehicle2: any;
  comparisonResult: any[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe((data: any[]) => {
      this.vehicles = data; 
    });
  }

  compareVehicles() {
    const vehicle1 = this.vehicles.find(vehicle => vehicle.name === this.selectedVehicle1);
    const vehicle2 = this.vehicles.find(vehicle => vehicle.name === this.selectedVehicle2);
  
    if (!vehicle1 || !vehicle2) {
      this.comparisonResult = [];
      return;
    }
  
    let differences = [];
  
    differences.push({attribute: 'Model', value1: vehicle1.model, value2: vehicle2.model });
  
    if (vehicle1.engineCapacity !== vehicle2.engineCapacity) {
      differences.push({ attribute: 'Engine Capacity', value1: vehicle1.engineCapacity, value2: vehicle2.engineCapacity });
    }
    if (vehicle1.fuelTankVolume !== vehicle2.fuelTankVolume) {
      differences.push({ attribute: 'Fuel Tank Volume', value1: vehicle1.fuelTankVolume, value2: vehicle2.fuelTankVolume });
    }
    if (vehicle1.tireSize !== vehicle2.tireSize) {
      differences.push({ attribute: 'Tire Size', value1: vehicle1.tireSize, value2: vehicle2.tireSize });
    }
    if (vehicle1.year !== vehicle2.year) {
      differences.push({ attribute: 'Year', value1: vehicle1.year, value2: vehicle2.year });
    }
    if (vehicle1.Price !== vehicle2.Price) {
      differences.push({ attribute: 'Price', value1: vehicle1.Price, value2: vehicle2.Price });
    }
    this.comparisonResult = differences;
  }
  getManufacturer(vehicleName: string): string {
    const vehicle = this.vehicles.find(v => v.name === vehicleName);
    return vehicle ? vehicle.manufacturer : 'Not selected';
  }
}
