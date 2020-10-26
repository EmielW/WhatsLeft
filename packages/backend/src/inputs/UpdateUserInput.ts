import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  active: boolean;
}
