import { Query, Args, Resolver } from '@nestjs/graphql';
import { PokemonDto } from './dto/pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonService } from './pokemon.service';

@Resolver()
export class PokemonResolver {
  constructor(private readonly pokemonServices: PokemonService) {}

  @Query(() => Pokemon)
  async pokemon(@Args('data') data: PokemonDto) {
    return this.pokemonServices.getPokemon(data);
  }
}
