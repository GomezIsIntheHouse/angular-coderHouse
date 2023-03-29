import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {



  heroes:Heroe[] = [];
  

  constructor( private heroeServices:HeroesService) { }

  getBackgroundColor(arg: string) : string{
    switch (arg) {
      case 'Marvel':
        
        return 'blue';
      case 'DC':
        
      return 'grey';
      
      
      default:
        return '';
    }
  }
  ngOnInit(): void {
    this.heroes = this.heroeServices.getHeroes();
  }

}
