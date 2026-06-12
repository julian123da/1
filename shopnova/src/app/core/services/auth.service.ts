import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storage = inject(StorageService);
  private router = inject(Router);

  private readonly STORAGE_KEY = 'shopnova_user';

  private _currentUser = signal<User | null>(
    this.storage.get<User>(this.STORAGE_KEY)
  );

  currentUser = this._currentUser.asReadonly();
  isLoggedIn = computed(() => !!this._currentUser());
  isAdmin = computed(() => this._currentUser()?.role === 'admin');

  login(email: string, password: string): boolean {
    const mockUser: User = {
      id: 1,
      name: 'Julian',
      email,
      role: email.includes('admin') ? 'admin' : 'user',
      token: 'mock-token-123'
    };

    this._currentUser.set(mockUser);
    this.storage.set(this.STORAGE_KEY, mockUser);

    return true;
  }

  logout(): void {
    this._currentUser.set(null);
    this.storage.remove(this.STORAGE_KEY);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return this._currentUser()?.token ?? null;
  }
}