import { Args, Query, Resolver } from "@nestjs/graphql";

import { Course } from "@generated/course/course.model";
import { FindManyCourseArgs } from "@generated/course/find-many-course.args";

import { CourseService } from "./course.service";

@Resolver(() => Course)
export class CourseResolver {
  constructor(private readonly service: CourseService) {}

  @Query(() => [Course])
  courses(@Args() args: FindManyCourseArgs) {
    return this.service.findMany(args);
  }
}
