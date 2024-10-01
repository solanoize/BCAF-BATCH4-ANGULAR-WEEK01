import { Component } from '@angular/core';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { IPagination } from '../../../../cores/interfaces/i-pagination';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';

@Component({
  selector: 'app-reservasi-detail',
  templateUrl: './reservasi-detail.component.html',
  styleUrl: './reservasi-detail.component.css',
})
export class ReservasiDetailComponent {
  constructor(private reservasiService: ReservasiService) {}

  get reservations(): IPagination<IReservasi[]> {
    return this.reservasiService.reservations;
  }
}
