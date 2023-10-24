import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApixuService } from './apixu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public wetherSearchForm: FormGroup;
  public weatherData: any;

  constructor(private formBuilder: FormBuilder,private serices:ApixuService) {
    this.wetherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  ngOnInit() {
    // Other initialization logic, if needed
  }



sendToAPIXU(formValues:any){

    this.serices
      .getWeather(formValues.location)
      .subscribe(data => console.log(data));
    

  

}

  title = 'wetherApp';
}
