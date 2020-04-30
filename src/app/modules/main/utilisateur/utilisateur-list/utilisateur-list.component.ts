import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {Personne} from "../../../../model/personne";
import {PersonneService} from "../../service/personne.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit,
  OnDestroy, AfterViewInit {


  personnesDataSource: Personne [];
  personnesSouscription: Subscription;

  dataColumns: string[] = ['name', 'lastName', 'email', 'cellPhone'];
  dataSource = new MatTableDataSource(this.personnesDataSource);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private personneService: PersonneService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.personnesSouscription = this.personneService.personnesSubject.subscribe(
      (values) => {
        this.personnesDataSource = values;
        this.dataSource.data = this.personnesDataSource;
        console.log(this.personnesDataSource);
      })
    //
    this.personneService.getPersonnes();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnDestroy(): void {
    this.personnesSouscription.unsubscribe()
  }


  adUser(): void {
    this.router.navigate(['add'], {relativeTo: this.route})
  }

}


