import { Container, ReduxProvider } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ReduxProvider>
			<Container.LayoutContainer>
				<Component {...pageProps} />
			</Container.LayoutContainer>
		</ReduxProvider>
	);
}
