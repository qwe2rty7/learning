import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: black;
`;

const Box = styled.div`
	width: 320px;
	height: 190px;
	background: #171c28;
	border-radius: 10%;
	box-shadow: 0 0 5px #00aeff;
	h3 {
		color: #00aeff;
	}
`;

// eslint-disable-next-line import/no-default-export
export default function Home(): JSX.Element {
	return (
		<Container>
			<Box>
				<h3>Custom made API</h3>
				<p>
					Revival's developers have over 20 years of experience
					combined. Making sure that we are almost never patched
				</p>
			</Box>

			<Box>
				<Link href="https://instagram.com">
					<a target="_blank">
						<h3>go to instagram lol</h3>
					</a>
				</Link>
				<p>
					Revival's developers have over 20 years of experience
					combined. Making sure that we are almost never patched
				</p>
			</Box>

			<Box>
				<h3>Custom made API</h3>
				<p>
					Revival's developers have over 20 years of experience
					combined. Making sure that we are almost never patched
				</p>
			</Box>
		</Container>
	);
}
