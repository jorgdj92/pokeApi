import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { GraphqlModule } from './core/graphql/graphql.module';

@Module({
  imports: [PokemonModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
