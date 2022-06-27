import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../../core/services/pokemon.service';

interface Pokemon {
  exists: boolean,
  name: string;
  image: string;
  types: string[];
}

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.sass']
})
export class PokemonSearchComponent implements OnInit {
  value = '';
  pokemon: Pokemon = {
    exists: false,
    name: '',
    image: '',
    types: [],
  };
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  getPokemon(name: string) {
    this.pokemon = {
      exists: false,
      name: '',
      image: '',
      types: [],
    }
    this.pokemonService.getPokeomByName(name.toLowerCase()).subscribe((res: any) => {
      if (res) {
        this.pokemon.exists = true;
        this.pokemon.name = res.name;
        this.pokemon.image = res.sprites.front_default
        res.types.map((item: any) => {
          this.pokemon.types.push(item.type.name)
         })
      }
    });
  }

}
