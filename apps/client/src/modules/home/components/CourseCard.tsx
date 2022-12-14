import { FC, useMemo, useState } from "react";
import {
  BoxArrowUpRight,
  Check2,
  ChevronDown,
  Trash,
  X,
} from "react-bootstrap-icons";

import clsx from "clsx";

import { Course, GenEdType } from "@cp-checklist/codegen";

export interface CourseCardProps {
  course: Pick<
    Course,
    | "abbrName"
    | "courseDescEn"
    | "courseDescTh"
    | "courseNameEn"
    | "courseNameTh"
    | "courseNo"
    | "credit"
    | "genEdType"
  >;
  onRemove?: () => unknown;
  checklistStatus?: boolean;
}

function facultyColor(courseNo: string, genEd: GenEdType) {
  if (courseNo.startsWith("2110")) return ["bg-pink-400", "bg-pink-300"];
  if (courseNo.startsWith("21")) return ["bg-red-400", "bg-red-300"];
  if (genEd === GenEdType.No) return ["bg-green-400", "bg-green-300"];

  return ["bg-blue-400", "bg-blue-300"];
}

export const CourseCard: FC<CourseCardProps> = ({
  checklistStatus,
  course,
  onRemove,
}) => {
  const [pColor, sColor] = useMemo(
    () =>
      checklistStatus === undefined
        ? facultyColor(course.courseNo, course.genEdType)
        : ["bg-white", "bg-neutral-200"],
    [checklistStatus, course.courseNo, course.genEdType]
  );
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          "z-10 flex items-center justify-between gap-8 px-4 py-2",
          pColor,
          expand ? "rounded-t-lg" : "rounded-lg"
        )}
      >
        <div>
          <p className="font-bold">
            {course.courseNo} {course.abbrName}
            {course.genEdType !== "NO" && !course.courseNo.startsWith("21") && (
              <span className="ml-2 rounded border border-black px-1">
                {course.genEdType}
              </span>
            )}
          </p>
          <p>
            {course.courseNameEn} {course.courseNameTh}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <p>{course.credit} หน่วยกิต</p>
          </div>

          <a
            href={`https://cugetreg.com/S/courses?keyword=${course.courseNo}`}
            rel="noreferrer"
            target="_blank"
          >
            <BoxArrowUpRight />
          </a>

          <button onClick={() => setExpand(!expand)}>
            <ChevronDown
              className={clsx(expand && "rotate-180", "transition-transform")}
            />
          </button>

          {onRemove && (
            <button onClick={() => onRemove()}>
              <Trash />
            </button>
          )}

          {checklistStatus !== undefined &&
            (checklistStatus ? (
              <Check2 className="h-6 w-6 text-green-500" />
            ) : (
              <X className="h-8 w-8 text-red-500" />
            ))}
        </div>
      </div>

      <div
        className={clsx(
          "w-full rounded-b-lg transition-transform",
          sColor,
          expand ? "p-2" : "pointer-events-none h-0 -translate-y-4 opacity-0"
        )}
      >
        <p>{course.courseDescEn}</p>
        <p>{course.courseDescTh}</p>
      </div>
    </div>
  );
};
