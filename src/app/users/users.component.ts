
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  amount: number;
}

const EXAMPLE_DATA: PeriodicElement[] = [
  { id: 1, name: "Hydrogen", weight: 1.0079, symbol: "H", amount: 10 },
  { id: 2, name: "Helium", weight: 4.0026, symbol: "He", amount: 10 },
  { id: 3, name: "Lithium", weight: 6.941, symbol: "Li", amount: 10 },
  { id: 4, name: "Beryllium", weight: 9.0122, symbol: "Be", amount: 10 },
  { id: 5, name: "Boron", weight: 10.811, symbol: "B", amount: 10 },
  { id: 6, name: "Carbon", weight: 12.0107, symbol: "C", amount: 10 },
  { id: 7, name: "Nitrogen", weight: 14.0067, symbol: "N", amount: 10 },
  { id: 8, name: "Oxygen", weight: 15.9994, symbol: "O", amount: 10 },
  { id: 9, name: "Fluorine", weight: 18.9984, symbol: "F", amount: 10 },
  { id: 10, name: "Neon", weight: 20.1797, symbol: "Ne", amount: 10 },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ["id", "name", "amount", "weight"];
  dataSource = new MatTableDataSource(EXAMPLE_DATA);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onRowClicked(row: Object) {
    console.log("Row clicked: ", row);
  }
}
