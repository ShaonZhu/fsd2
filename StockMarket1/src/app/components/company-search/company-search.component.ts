import { Component, PipeTransform, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
interface Company {
  name: string;
  ceo: string;
  stocks: string;
}

const COMPANIES: Company[] = [
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
];

function search(text: string, pipe: PipeTransform): Company[] {
  return COMPANIES.filter(company => {
    const term = text.toLowerCase();
    return company.name.toLowerCase().includes(term)
        || pipe.transform(company.ceo).includes(term)
        || pipe.transform(company.stocks).includes(term);
  });
}


@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss']
})
export class CompanySearchComponent implements OnInit {
  companies$: Observable<Company[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.companies$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
   }

  ngOnInit(): void {
  }

}
