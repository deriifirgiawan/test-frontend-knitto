import { forwardRef } from "react";
import { FloatingButton } from "..";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
	children: React.ReactNode;
}
export const LayoutContainer = forwardRef((_props: Props, _) => {
	const { children } = _props;

	return (
		<main className={`flex flex-row justify-center w-full ${inter.className}`}>
			<section className="relative overflow-y-auto w-full md:w-[420px] lg:w-[420px] h-screen border-0 md:border lg:border">
				{children}
			</section>
		</main>
	);
});
