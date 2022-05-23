import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  exports: [ComponentsModule, RouterModule],
})
export class SharedModule {}
