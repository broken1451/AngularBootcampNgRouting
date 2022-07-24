import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos exportados de angular material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MATERIALmODULES = [
  MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatProgressSpinnerModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...MATERIALmODULES]
})
export class MaterialModule { }
