import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  /**
   *
   */
  constructor(private router : Router) {
    
  }
  hoverEffect : boolean = false;
  hoverEffect1 : boolean = false;
  hoverEffect2 : boolean = false;

  cardInfo : any = [
    {
      id : 1,
      title : "Business Technology Consulting"
    },
    {
      id : 2,
      title : "Digital Data Factory"
    },    {
      id : 3,
      title : "Infrastructure & Security"
    },
  ]

  startHover(image:string){
    console.log(image);
    
    if(image==='image1'){
      this.hoverEffect = true;
    }
    else if(image==='image2'){
      this.hoverEffect1 = true;
    }else if(image === 'image3'){
      this.hoverEffect2 = true;
    }else{
      console.log(image)
    }
  }
  endHover(image : string){
    if(image==='image1'){
      this.hoverEffect = false;
    }
    else if(image==='image2'){
      this.hoverEffect1 = false;
    }else if(image === 'image3'){
      this.hoverEffect2 = false;
    }
  }

  goToPageBtc() {
    this.router.navigateByUrl('/pagebtc');
  }

  gotToPageDdf(){
    this.router.navigateByUrl('/pageddf');
  }
}
