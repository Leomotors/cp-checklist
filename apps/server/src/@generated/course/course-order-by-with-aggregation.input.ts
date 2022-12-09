import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CourseCountOrderByAggregateInput } from './course-count-order-by-aggregate.input';
import { CourseAvgOrderByAggregateInput } from './course-avg-order-by-aggregate.input';
import { CourseMaxOrderByAggregateInput } from './course-max-order-by-aggregate.input';
import { CourseMinOrderByAggregateInput } from './course-min-order-by-aggregate.input';
import { CourseSumOrderByAggregateInput } from './course-sum-order-by-aggregate.input';

@InputType()
export class CourseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    courseNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    abbrName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseNameEn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseNameTh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseDescEn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseDescTh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseCondition?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    credit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditHours?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    department?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    faculty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genEdType?: keyof typeof SortOrder;

    @Field(() => CourseCountOrderByAggregateInput, {nullable:true})
    _count?: CourseCountOrderByAggregateInput;

    @Field(() => CourseAvgOrderByAggregateInput, {nullable:true})
    _avg?: CourseAvgOrderByAggregateInput;

    @Field(() => CourseMaxOrderByAggregateInput, {nullable:true})
    _max?: CourseMaxOrderByAggregateInput;

    @Field(() => CourseMinOrderByAggregateInput, {nullable:true})
    _min?: CourseMinOrderByAggregateInput;

    @Field(() => CourseSumOrderByAggregateInput, {nullable:true})
    _sum?: CourseSumOrderByAggregateInput;
}
