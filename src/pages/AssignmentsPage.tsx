'use client';

import { Box, Flex, Grid, Divider, Text, Heading } from '@chakra-ui/react';
import AssignmentCard from '../Main/AssignmentCard';

interface AssignmentProps {
	name: string;
	dueAt: Date;
	lockAt: Date;
	unlockAt: Date;
	expectsSubmission: boolean;
	expectsExternalSubmission: boolean;
}

interface AssignmentPageProps {
	assignments: [AssignmentProps];
}

const AssignmentsPage = ({ assignments }: AssignmentPageProps) => {
	return (
		<Flex
			padding="8px"
			alignItems="center"
			justifyContent="center"
			flexDirection={'column'}
		>
			{assignments.map((assignment: any, index: any) => {
				return (
					<>
						<AssignmentCard
							key={`assignment-${index}`}
							name={assignment.name}
							dueDate={assignment.dueAt}
							expectsSubmission={assignment.expectsSubmission}
							expectsExternalSubmission={assignment.expectsExternalSubmission}
							locked={assignment.lockAt > new Date()}
						/>
						<Divider />
					</>
				);
			})}
		</Flex>
	);
};

export default AssignmentsPage;
