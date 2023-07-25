// import { useRouter } from 'next/router';
import Link from 'next/link';
import {
	Box,
	Grid,
	Text,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Flex,
	Divider,
} from '@chakra-ui/react';

interface CourseCardProps {
	name: string;
	courseID: string;
	accessible: boolean;
}

const CourseCard = ({ name, courseID, accessible }: CourseCardProps) => {
	return (
		<Flex alignItems="center" justifyContent="center">
			<Card
				width="500px"
				minHeight="300px"
				padding="8px"
				margin="16px"
				border="1px solid #faf0f1"
				bgColor="transparent"
				color="#faf0f1"
			>
				<CardHeader>
					<Heading size="xl">Course</Heading>
				</CardHeader>
				{/* <Divider width="80%" /> */}
				<CardBody>
					{accessible ? (
						<Box>
							<Link href={`/courses/${courseID}`} passHref>
								<Text
									fontSize="xl"
									_hover={{
										textDecoration: 'underline',
									}}
								>
									{name}
								</Text>
							</Link>
							<Text>{courseID}</Text>
						</Box>
					) : (
						<Box>
							<Text>
								Course of id <strong>{courseID}</strong> is restricted by date
							</Text>
						</Box>
					)}
				</CardBody>
			</Card>
		</Flex>
	);
};

export default CourseCard;
