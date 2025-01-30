import { Component, OnInit, signal } from '@angular/core';
import { ModalComponent } from '@unipin/angular-applet/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [ModalComponent]
})
export class ModalComponentv1 implements OnInit {

  public isModalOpen = false; // ✅ Use Signal<boolean> instead of InputSignal<boolean>

  constructor() {}

  public ngOnInit(): void {}

  public openModal(): void {
    this.isModalOpen = true; // ✅ Use `.set(value)`
  }

  public closeModal(): void {
    this.isModalOpen= false; // ✅ Use `.set(value)`
  }

  public onModalDismissed(): void {
    console.log('Modal closed');
  }
}
