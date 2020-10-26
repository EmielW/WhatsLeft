import { MaxLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(30)
  firstName: string;

  @Field()
  @MaxLength(30)
  lastName: string;

  @Field()
  age: number;
}
