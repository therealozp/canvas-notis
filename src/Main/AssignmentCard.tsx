import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
import { Lato } from 'next/font/google';
interface AssignmentCardProps {
	name: string;
	dueDate: Date;
	expectsSubmission: boolean;
	expectsExternalSubmission: boolean;
	locked: boolean;
}

const lato = Lato({
	weight: '700',
	subsets: ['latin'],
	display: 'swap',
});

const AssignmentCard = ({
	name,
	dueDate,
	expectsSubmission,
	expectsExternalSubmission,
	locked,
}: AssignmentCardProps) => {
	const dueAt = new Date(dueDate);
	return (
		<Flex
			justifyContent="center"
			width="80vw"
			minHeight="200px"
			flexDir="column"
		>
			<Flex alignItems={'center'}>
				{locked ? <LockIcon marginRight="16px" /> : null}
				<Heading
					fontSize="3xl"
					className={lato.className}
					opacity={locked ? '0.5' : '1'}
				>
					{name}
				</Heading>
			</Flex>
			<br />
			<Box>
				{locked ? (
					<Text>
						This assignment is currently <strong>locked</strong>
					</Text>
				) : null}
			</Box>
			<Flex>
				<Text>Due date:&nbsp;</Text>
				<Text fontWeight={'bold'}>{dueAt.toLocaleString()}</Text>
			</Flex>
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
