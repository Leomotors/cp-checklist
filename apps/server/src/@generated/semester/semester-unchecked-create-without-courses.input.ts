import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SemesterUncheckedCreateWithoutCoursesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    semester!: number;

    @Field(() => String, {nullable:false})
    userId!: string;
}
