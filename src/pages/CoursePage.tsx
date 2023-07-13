'use client';

import { Grid } from '@chakra-ui/react';
import CourseCard from '../Main/CourseCard';

interface CourseProps {
	name: string;
	id: any;
	access_restricted_by_date: boolean;
}

interface CoursePageProps {
	courses: [CourseProps];
}

const CoursePage = ({ courses }: CoursePageProps) => {
	let courseList = [...courses];
	courseList.sort((a, b) => {
		if (a.access_restricted_by_date && !b.access_restricted_by_date) {
			return 1;
		} else if (!a.access_restricted_by_date && b.access_restricted_by_date) {
			return -1;
		} else {
			return 0;
		}
	});
	return (
		<Grid gridTemplateColumns={'1fr 1fr'}>
			{courseList.map((course: any, index: any) => {
				return (
					<CourseCard
						key={`course-${index}`}
						name={course.name}
						courseID={course.id}
						accessible={!course.access_restricted_by_date}
					/>
				);
			})}
		</Grid>
	);
};

export default CoursePage;
