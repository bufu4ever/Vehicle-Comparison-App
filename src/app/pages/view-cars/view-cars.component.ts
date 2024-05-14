import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html'
})
export class ViewCarsComponent implements OnInit {


  cars: any[] = [];
 
  constructor(private carService: CarService,private router: Router) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {
      this.cars = data;

    });
  }
  
goToCarList(): void {
  this.router.navigate(['/']);
}
navigateToComparison() {
  this.router.navigate(['/vehicle-comparison']);
}

}
