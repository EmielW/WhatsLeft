import { Field, ID, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
@ObjectType()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    firstName: string;

    @Field(() => String)
    @Column()
    lastName: string;

    @Field(() => Int)
    @Column()
    age: number;

    @Field(() => Boolean)
    @Column({ default: false })
    active: boolean;
}
