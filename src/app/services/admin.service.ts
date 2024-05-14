import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private afs: AngularFirestore) {}

  createItem(car: any): void {
    this.afs.collection('cars').add(car);
  }

  readItems() {
    console.log("Attempting to fetch cars...");
    return this.afs.collection('cars').snapshotChanges().pipe(
      map(actions => {
        console.log("Data fetched successfully");
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          console.log('Car:', { id, ...data });
          return { id, ...data };
        });
      })
    );
  }

  updateItem(carId: string, car: any): Promise<void> {
    return this.afs.collection('cars').doc(carId).update(car);
  }

  deleteItem(carId: string): Promise<void> {
    return this.afs.collection('cars').doc(carId).delete();
  }

  updateField(carId: string, field: string, value: any): Promise<void> {
    return this.afs.collection('cars').doc(carId).update({ [field]: value });
  }
}
