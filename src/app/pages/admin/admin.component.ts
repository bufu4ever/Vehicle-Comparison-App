import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  cars: any[] = [];
  newCar = {
    manufacturer: '',
    model: '',
    year: '',
    engineCapacity: '',
    tireSize: '',
    fuelTankVolume: '',
    Price:''
  };

  constructor(private adminService: AdminService, private router: Router,private toastr: ToastrService) {
    this.loadCars();
  }
  ngOnInit() {
    this.loadCars();
  }
  loadCars(): void {
    this.adminService.readItems().subscribe(cars => {
      console.log("Cars loaded in component:", cars);
      this.cars = cars;
    }, error => {
      console.error("Error loading cars:", error);
    });
  }


  addItem(): void {
    if (this.newCar.model && this.newCar.year) {
      this.adminService.createItem(this.newCar);
      this.newCar = { manufacturer: '',model: '', year: '', engineCapacity: '', tireSize: '', fuelTankVolume: '' , Price:''}; 
      this.toastr.success('New car added successfully!', 'Add Car');

    }
  }

  updateCar(key: string, car: any): void {
    this.adminService.updateItem(key, car);
    this.toastr.info('Car details updated successfully!', 'Update Car');

  }

  deleteItem(key: string): void {
    this.adminService.deleteItem(key);
    this.toastr.error('Car deleted successfully!', 'Delete Car');

  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.toastr.success('You have been logged out successfully!', 'Logout');

  }
 
  updateField(carId: string, field: string, value: any): void {
    this.adminService.updateField(carId, field, value).then(() => {
      console.log(`${field} updated successfully`);
    }).catch(error => {
      console.error(`Error updating ${field}`, error);
    });
  }
}


