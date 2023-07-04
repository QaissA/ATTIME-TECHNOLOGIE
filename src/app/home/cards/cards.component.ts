import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  hoverEffect : boolean = false;
  hoverEffect1 : boolean = false;
  hoverEffect2 : boolean = false;

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
}
