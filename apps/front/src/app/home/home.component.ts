import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ThemePickerDialogService } from '@polls/ui/ui-material';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'polls-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  hideRange = true;
  data = this.createData();
  dataSource = new MatTableDataSource<{index: number, title: string}>(this.createData())

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public authService: AngularFireAuth,
    private router: Router,
    private themePicker: ThemePickerDialogService
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  changeTheme() {
    this.themePicker.show();
  }

  logout() {
    this.authService
      .signOut()
      .then(() => this.router.navigateByUrl('/login'))
      .catch(console.error);
  }

  createData() {
    return new Array(1201)
      .fill(undefined)
      .map((_, i) => ({ index: i + 1, title: `Title ${i + 1}` }));
  }
}
