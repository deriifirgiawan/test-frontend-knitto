import { Spinner } from "@/components";

export const LoadingPage = () => {
	return (
		<div className="flex justify-center w-full">
			<div className="w-full md:w-[420px] lg:w-[420px] h-screen flex justify-center items-center backdrop-blur-sm bg-white/5 z-[100]">
				<Spinner />
			</div>
		</div>
	);
};
