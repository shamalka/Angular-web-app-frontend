import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  HomeTitle: string = "Home";
  HeaderStyle: boolean = false;

  ToDos: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.GetTodos().subscribe(data =>{
        this.ToDos = data;
        console.log(this.ToDos);
      })
  }

  FirstClick(){
    console.log("Clicked");
    this.HomeTitle = "This is Home";
    this.HeaderStyle = true;
  }

}
