import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';

@Component({
  selector: 'app-reservasi-choice',
  templateUrl: './reservasi-choice.component.html',
  styleUrl: './reservasi-choice.component.css',
})
export class ReservasiChoiceComponent {
  // private modalService = inject(NgbModal);

  constructor(
    private modalService: NgbModal,
    private reservasiService: ReservasiService
  ) {}

  closeResult = '';

  open(content: TemplateRef<any>) {
    this.onAllReservations();
    this.modalService.open(content, { size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  get reservations(): IReservasi[] {
    return this.reservasiService.reservations;
  }

  onAllReservations() {
    this.reservasiService.all().subscribe((resp: IReservasi[]) => {
      this.reservasiService.reservations = resp;
    });
  }
}
