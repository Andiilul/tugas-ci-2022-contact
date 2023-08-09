import comms from "../../assets/comms.jpg";
import react from "../..//assets/react.svg";
export default function Hero() {
	const sectionStyle = {
		backgroundImage: `url(${comms})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundColor: "rgba(0, 0, 0, 0.5)", 
	};
	const svgStyle = {
		filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 1))", 
	};

	const handleScrollToContact = () => {
		const contactBox = document.getElementById("contactBox");
		if (contactBox) {
			contactBox.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<main className="bg-dark p-[100px_64px_64px_64px] ">
			<section
				className="bg-dark w-full h-[600px] rounded-lg overflow-hidden flex animate-leftAppear"
				style={sectionStyle}
			>
				<div className="p-5 bg-gradient-to-r from-[rgba(0,0,0,1)] to-transparent grow flex justify-center items-center  gap-[40px]">
					<div className="flex flex-col gap-[20px]">
						<p className="text-cyan font-[500] text-[60px] -mb-5">
							Manage Your <br /> Contact
						</p>
						<p className="w-[340px] text-white text-[20px] ">
							Simple, Reliable. Streamline Your Connections: Effortlessly
							Organize and Stay in Touch
						</p>
						<button
							onClick={handleScrollToContact}
							className="animate-pulse hover:bg-[rgba(97,220,251,0.3)] duration-300 hover:duration-300 bg-transparent select-none border-cyan border-2 text-cyan rounded-[100px] text-[35px] w-max p-[10px_30px] font-light"
						>
							Get Started !!!
						</button>
					</div>
					<div className="flex items-center h-full select-none">
						<img
							draggable={false}
							src={react}
							className="h-[300px] animate-infiniteSpin"
							style={svgStyle}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
