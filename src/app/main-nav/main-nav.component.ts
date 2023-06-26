import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"],
})
export class MainNavComponent implements OnInit {
  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset)
    .subscribe(async result => {
      this.isHandset = result.matches
    })
  }
}
