import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matkul } from './matkul';

@Injectable({
  providedIn: 'root'
})
export class MatkulService {
  baseUrl = 'https://crudcrud.com/api/8bf7876fd73c4f5c8c67eadb07319c22';

  constructor(private http: HttpClient) { }

  getMatkul() {
    return this.http.get(`${this.baseUrl}/matkul`);
  }

  getDatamatkul(id: number) {
    return this.http.get(`${this.baseUrl}/matkul/${id}`);
  }

  postMatkul(matkul: Matkul) {
    delete matkul._id;
    return this.http.post(`${this.baseUrl}/matkul`, matkul);
  }

  updateMatkul(matkul: Matkul) {
    const id = matkul._id;
    delete matkul._id;
    return this.http.put(`${this.baseUrl}/matkul/${id}`, matkul);
  }

  deleteMatkul(matkul: Matkul) {
    const id = matkul._id;
    return this.http.delete(`${this.baseUrl}/matkul/${id}`);
  }
}