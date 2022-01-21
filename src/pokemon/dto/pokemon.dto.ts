import { Field, InputType } from '@nestjs/graphql';
import {} from 'class-validator';

@InputType()
export class PokemonDto {
  @Field({ nullable: true })
  name: string;
}
