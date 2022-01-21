import { Field, ObjectType } from '@nestjs/graphql';
import { Abilities } from './abilities.model';

@ObjectType()
export class Pokemon {
  @Field()
  name: string;
  @Field(() => [Abilities], { nullable: true })
  abilities?: Array<Abilities>;
  @Field()
  weight: number;
}
