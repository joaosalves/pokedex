import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/shared/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PoTabsModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {

  id: number;
  name: string;
  height: number;
  weight: number;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  stats: any;
  types: any;
  abilities: any;

  constructor(private route: ActivatedRoute, private pokeService: PokemonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { 
      this.name = params.get('name');
      this.getPokemonDetails();
    });
  }

  getPokemonDetails() {
    this.pokeService.getPokemonDetails(this.name).subscribe(response => {

      this.id = response.id;
      this.name = response.name;
      this.height = response.height;
      this.weight = response.weight;
      this.back_default = response.sprites.back_default;
      this.back_female = response.sprites.back_female;
      this.back_shiny = response.sprites.back_shiny;
      this.back_shiny_female = response.sprites.back_shiny_female;
      this.front_default = response.sprites.front_default;
      this.front_female = response.sprites.front_female;
      this.front_shiny = response.sprites.front_shiny;
      this.front_shiny_female = response.sprites.front_shiny_female;
      this.stats = response.stats;
      this.types = response.types;
      this.abilities = response.abilities;
      
     });
  }

}
