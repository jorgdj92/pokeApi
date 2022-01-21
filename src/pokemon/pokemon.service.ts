import { Injectable } from '@nestjs/common';
import { AxioslibService } from 'libs/axioslib/axioslib.service';
import { PokemonDto } from './dto/pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly axiosLib: AxioslibService) {}
  async getPokemon(data: PokemonDto) {
    const uri = `${process.env.API_URL + process.env.PATH_POKEMON + data.name}`;
    const result = await this.axiosLib.generateRequest({
      method: 'GET',
      url: uri,
    });
    return result;
  }
}
