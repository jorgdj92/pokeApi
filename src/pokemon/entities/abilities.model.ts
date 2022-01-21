import { Field, ObjectType } from '@nestjs/graphql';
import { Ability } from './ability.model';

@ObjectType()
export class Abilities {
  @Field({ nullable: true })
  is_hidden: boolean;
  @Field({ nullable: true })
  slot: number;
  @Field(() => Ability, { nullable: false })
  ability?: Ability;
}
