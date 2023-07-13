import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

interface AssignmentCardProps {
	name: string;
	dueDate: Date;
	expectsSubmission: boolean;
	expectsExternalSubmission: boolean;
	locked: boolean;
}

const AssignmentCard = ({
	name,
	dueDate,
	expectsSubmission,
	expectsExternalSubmission,
	locked,
}: AssignmentCardProps) => {
	const dueAt = new Date(dueDate);
	return (
		<Flex alignItems="center" width="80vw" minHeight="150px">
			<Box>{locked ? <LockIcon /> : null}</Box>
			<Box>
				<Text>{name}</Text>
			</Box>
			<Box>
				<Text>{dueAt.toLocaleDateString()}</Text>
			</Box>
			<Box>
				{expectsExternalSubmission ? (
					<Text>
						<em>Submission on other platform expected</em>
					</Text>
				) : null}
			</Box>
		</Flex>
	);
};

export default AssignmentCard;
