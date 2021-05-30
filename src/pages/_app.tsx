import "@styles/global.css";
import { pageview } from "@lib/gtag";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line import/no-default-export
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>NextJS Boilerplate | Nik Schaefer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

{/* <StyledDiv>
				Mary had a little lamb
				<br />
				Little lamb, little lamb
				<br />
				Mary had a little lamb
				<br />
				It's fleece was white as snow
				<br />
				<br />
			</StyledDiv>
			<div>
				Everywhere that Mary went
				<br />
				Mary went, Mary went
				<br />
				Everywhere that Mary went
				<br />
				The lamb was sure to go
				<br />
				<br />
			</div>
			It followed her to school one day
			<br />
			School one day, school one day
			<br />
			It followed her to school one day
			<br />
			Which was againts the rules
			<br />
			<br />
			It made the children laugh and play
			<br />
			Laugh and play, laugh and play
			<br />
			It made the children laugh and play
			<br />
			To see the lamb at school
			<br />
			<br />
			And so the teacher turned it out
			<br />
			Turned it out, turned it out
			<br />
			And so the teacher turned it out
			<br />
			But still it lingered near
			<br />
			<br />
			Why does the lamb love Mary so?
			<br />
			Love Mary so, love Mary so
			<br />
			Why does the lamb love Mary so?
			<br />
			The eager children cry
			<br />
			<br />
			Why, Mary loves the lamb, you know
			<br />
			The lamb, you know, the lamb, you know
			<br />
			Why, Mary loves the lamb, you know
			<br />
			The teacher did reply
			<br />
			<br />
			Mary had a little lamb
			<br />
			Little lamb, little lamb
			<br />
			Mary had a little lamb
			<br />
			It's fleece was white as snow
			<br />
			<br />
			Everywhere that Mary went
			<br />
			Mary went, Mary went
			<br />
			Everywhere that Mary went
			<br />
			The lamb was sure to go
			<br />
			<br />
			Mary had a little lamb
			<br />
			Little lamb, little lamb
			<br />
			Mary had a little lamb
			<br />
			It's fleece was white as snow */}
			<Component {...pageProps} />
		</>
	);
}
