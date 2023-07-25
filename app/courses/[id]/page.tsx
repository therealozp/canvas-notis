import { gql } from '@apollo/client';
import { getClient } from '@/src/apollo/client';
import AssignmentsPage from '@/src/pages/AssignmentsPage';

const GET_ASSIGNMENTS = gql`
	query GetAssignments($courseID: ID!) {
		course(id: $courseID) {
			name
			assignmentsConnection {
				nodes {
					dueAt
					createdAt
					lockAt
					unlockAt
					name
					expectsSubmission
					expectsExternalSubmission
				}
			}
		}
	}
`;

const assignmentspage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	// console.log(id);
	const resp = await getClient().query({
		query: GET_ASSIGNMENTS,
		variables: { courseID: id },
	});
	// console.log(resp.data.course.assignmentsConnection.nodes);
	return (
		<AssignmentsPage
			assignments={resp.data.course.assignmentsConnection.nodes}
			courseName={resp.data.course.name}
		/>
	);
};

export default assignmentspage;
