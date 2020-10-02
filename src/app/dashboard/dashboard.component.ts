import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DashboardComponent implements OnInit {

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  } 
  dataSource = [
    {
      "salesRep": "Jane Doe",
      "date": "July 20th 2018",
      "client": "Oberoi Group of Hotels",
      "primaryContact":"Mahmud Ritelli",
      "title": "C Level",
      "vertical": "Sales",
      "location": "Goto Meeting",
      "purpose": "Understand the current ecosystem",
      "remarks": "Send first cut of proposed solutions",
      "status": "Needs /defined"
  },
  {
    "salesRep": "John Doe",
    "date": "July 20th 2018",
    "client": "Taj Group of Hotels",
    "primaryContact":"Dew Tilbey",
    "title": "V P Level",
    "vertical": "Marketing",
    "location": "Google Meet",
    "purpose": "Demo the product",
    "remarks": "Meeting confirmed for tomorrow",
    "status": "Contact made"
},
{
  "salesRep": "John Doe",
  "date": "July 20th 2018",
  "client": "Taj Group of Hotels",
  "primaryContact":"Dew Tilbey",
  "title": "V P Level",
  "vertical": "Marketing",
  "location": "Google Meet",
  "purpose": "Demo the product",
  "remarks": "Meeting confirmed for tomorrow",
  "status": "Contact made"
},
{
  "salesRep": "Tim Roberts",
  "date": "July 20th 2018",
  "client": "Taj Group of Hotels",
  "primaryContact":"Dew Tilbey",
  "title": "V P Level",
  "vertical": "Marketing",
  "location": "Google Meet",
  "purpose": "Demo the product",
  "remarks": "Meeting confirmed for tomorrow",
  "status": "Won"
},
{
  "salesRep": "Julia Cruise Doe",
  "date": "July 20th 2018",
  "client": "Taj Group of Hotels",
  "primaryContact":"Dew Tilbey",
  "title": "V P Level",
  "vertical": "Marketing",
  "location": "Google Meet",
  "purpose": "Demo the product",
  "remarks": "Meeting confirmed for tomorrow",
  "status": "Lost"
}
];
  
  displayedColumns: string[] = [ "salesRep","date","client","primaryContact","title","vertical","location","purpose","remarks","status"];
  constructor() { }

  ngOnInit(): void {
  }

}
