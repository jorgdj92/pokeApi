import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';
import { AxioslibService } from 'libs/axioslib/axioslib.service';

@Module({
  providers: [PokemonService, PokemonResolver, AxioslibService],
})
export class PokemonModule {}
