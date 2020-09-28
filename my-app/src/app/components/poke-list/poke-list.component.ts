import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/shared/pokemon';
import { PoTableColumn, PoContainerModule, PoAvatarModule, PoModalModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  isLoading: boolean;
  imageLoaded: boolean;
  pokemon: Pokemon[] = [];

  columnsP : PoTableColumn[] = [
    { property: 'id', label: 'ID', type: "string" },
    { property: 'url', label: 'URL', type: "string" },
    { property: 'name', label: 'Name', type: "string" }
  ];

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {

    this.isLoading = true;
    this.pokeService.getPokemons(0, 150).subscribe(
      results => {
        this.pokemon = results;
        this.isLoading = false;
      },
      err => {
      }
    )
  }

}
