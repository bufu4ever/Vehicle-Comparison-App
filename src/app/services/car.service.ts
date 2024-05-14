import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private firestore: AngularFirestore) {}

  getCars(): Observable<any[]> {
    return this.firestore.collection('cars').valueChanges({ idField: 'name' }); 
  }
}
