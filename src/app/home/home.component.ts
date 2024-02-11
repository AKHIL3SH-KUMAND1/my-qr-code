import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicinesService, Medicine } from '../medicines.service';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatRadioModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentMedicine: Medicine | undefined;
  supportedLanguages = ['english', 'hindi', 'telugu', 'marathi'];
  selectedLanguage = 'english';
  constructor(
    private activatedRoute: ActivatedRoute,
    public medicineService: MedicinesService
  ) {
    this.activatedRoute.params.subscribe((param) => {
      let fmedicine = this.medicineService.medicines.find((medicine) => {
        return medicine.productId == +param['id'];
      });
      this.currentMedicine = fmedicine;
    });
    // this.switchLanguage('hini')
  }

  switchLanguage(lang: string): void {
    this.selectedLanguage = lang;
    if (this.selectedLanguage == 'english') {
      this.currentMedicine = this.medicineService.medicines.find((medicine) => {
        return medicine.productId == this.currentMedicine?.productId;
      });
    } else if (this.selectedLanguage == 'hindi') {
      this.currentMedicine = this.medicineService.medicinesHindi.find(
        (medicine) => {
          return medicine.productId == this.currentMedicine?.productId;
        }
      );
    } else if (this.selectedLanguage == 'telugu') {
      this.currentMedicine = this.medicineService.medicinesTelugu.find(
        (medicine) => {
          return medicine.productId == this.currentMedicine?.productId;
        }
      );
    } else {
      this.currentMedicine = this.medicineService.medicinesMarathi.find(
        (medicine) => {
          return medicine.productId == this.currentMedicine?.productId;
        }
      );
    }
  }


  getObjectKeys(obj: Medicine): (keyof Medicine)[] {
    return Object.keys(obj) as (keyof Medicine)[];
  }
}
