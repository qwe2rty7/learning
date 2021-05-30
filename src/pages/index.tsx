import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
`;

const Circle = styled.div`
	width: 100px;
	height: 100px;
	background: linear-gradient(135deg, red 0%, blue 100%);
	border-radius: 35%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`;

// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return (
		<Container>
			<Circle>hello</Circle>
			<Circle>bye</Circle>
			<Circle>bro</Circle>
		</Container>
	);
}
