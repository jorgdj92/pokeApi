import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ability {
  @Field(() => String, { nullable: false })
  name: string;
  @Field(() => String, { nullable: false })
  url: string;
}
