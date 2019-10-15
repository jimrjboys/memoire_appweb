import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FraisService } from 'src/app/service/frais/frais.service';

@Component({
  selector: 'app-add-gest',
  templateUrl: './add-gest.component.html',
  styleUrls: ['./add-gest.component.scss']
})

export class AddGestComponent implements OnInit {

	comsFintek: any;
  	private sub: any;

  constructor(public router: ActivatedRoute, 
  	private fraisService : FraisService,
  	public route: Router, ) { }

  ngOnInit() {
	this.sub = this.router.params.subscribe(params => {
   		this.comsFintek = params; 
    });
  }

  onSubmit(comsFintekForm: NgForm) {
    if (comsFintekForm.value.$key == null){
        comsFintekForm.value.$key = "Commission";
        this.fraisService.updateCommissionFintek(comsFintekForm.value);
      }
    else{
          this.fraisService.updateCommissionFintek(comsFintekForm.value);
      }

    this.resetForm(comsFintekForm);

	this.route.navigate(['depot']);
  }
 
  resetForm(comsFintekForm?: NgForm) {
    if (comsFintekForm != null)
      comsFintekForm.reset();
    this.comsFintek = {
      $key: null,
      fraisTrasac: 0,
      depotmin: 0,
    }
  }

}
