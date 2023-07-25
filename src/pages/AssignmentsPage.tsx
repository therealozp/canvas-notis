'use client';

import { Box, Flex, Grid, Divider, Text, Heading } from '@chakra-ui/react';
import AssignmentCard from '../Main/AssignmentCard';
import { Ubuntu } from 'next/font/google';

const ubuntuHeading = Ubuntu({
	weight: '700',
	subsets: ['latin'],
	display: 'swap',
});

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
	courseName: string;
}

const AssignmentsPage = ({ assignments, courseName }: AssignmentPageProps) => {
	let assignmentList = [...assignments];
	assignmentList.sort((a, b) => {
		const d1 = new Date(a.dueAt);
		const d2 = new Date(b.dueAt);
		if (d1 > d2) {
			return 1;
		} else if (d1 < d2) {
			return -1;
		}
		return 0;
	});
	return (
		<>
			<Flex
				padding="16px"
				paddingTop="64px"
				width="100vw"
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Heading fontSize={'5xl'} className={ubuntuHeading.className}>
					{courseName}
				</Heading>
			</Flex>
			<Flex
				padding="8px"
				alignItems="center"
				justifyContent="center"
				flexDirection={'column'}
			>
				{assignmentList.map((assignment: any, index: any) => {
					const unlockDate = new Date(assignment.unlockAt);
					return (
						<>
							<AssignmentCard
								key={`assignment-${index}`}
								name={assignment.name}
								dueDate={assignment.dueAt}
								expectsSubmission={assignment.expectsSubmission}
								expectsExternalSubmission={assignment.expectsExternalSubmission}
								locked={unlockDate > new Date()}
							/>
							<Divider />
						</>
					);
				})}
			</Flex>
		</>
	);
};

export default AssignmentsPage;
