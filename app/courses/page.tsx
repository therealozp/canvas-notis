import CoursePage from '@/src/pages/CoursePage';

const headers = {
	Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
};

async function getCourses() {
	const response = await fetch(process.env.BASE_URL + '/courses', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
		},
	});
	const data = await response.json();
	return data;
}

export default async function CoursesPage() {
	const courses = await getCourses();
	// console.log(courses);

	return (
		<>
			<CoursePage courses={courses} />
		</>
	);
}
