import { Injectable } from '@angular/core';
import { Company } from '../entities/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor() { }

  searchCompany(companyNam: string): Company[] {
    return [
      {
        name: 'Company 1',
        ceo: 'Shaon',
        stocks: 'BSE, NSE'
      },
      {
        name: 'Company 2',
        ceo: 'will',
        stocks: 'BSE, NSE'
      },
      {
        name: 'Company 3',
        ceo: 'song',
        stocks: 'BSE, NSE'
      },
      {
        name: 'Company 4',
        ceo: 'brian',
        stocks: 'BSE, NSE'
      }
    ]
  }
}
