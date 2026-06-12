import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ToastMessage {
  message: string;
  type: 'success' | 'danger' | 'warning' | 'info';
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  toasts = signal<ToastMessage[]>([]);

  show(toast: ToastMessage): void {
    this.toasts.update(t => [...t, toast]);
    setTimeout(() => this.remove(0), 3500);
  }

  remove(index: number): void {
    this.toasts.update(t => t.filter((_, i) => i !== index));
  }
}
