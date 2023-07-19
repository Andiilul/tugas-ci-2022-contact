import Navitems from "../atoms/Navitems";
import logo from "../../assets/ciContactsLogo.svg";
import { useEffect, useState } from "react";

function Navbar() {
	//Function
	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			setScrollPosition(position);
			console.log("Y Index", scrollPosition);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]);

	//get viewport in px
	const viewportHeightInPx = window.innerHeight;
	console.log(viewportHeightInPx);

	//List of Navitems
	const navItemList = [
		{
			navName: "Home",
			navTo: "/",
		},
		{
			navName: "Contacts",
			navTo: "/",
		},
		{
			navName: "Abous Us",
			navTo: "/",
		},
	];

	const navClass =
		scrollPosition < viewportHeightInPx - 100 ? `absolute animate-botToTop` : "fixed animate-topToBot";

	return (
		<nav
			className={`${navClass} h-[100px] items-center flex justify-center gap-20 w-screen bg-[rgba(30,30,30,0.8)] backdrop-blur-sm`}
		>
			<div className="text-white  select-none flex gap-[10px] items-center text-[30px]">
				<img draggable={false} src={logo} className=" h-[50px]" />
				<p className="">CI-Contacts</p>
			</div>
			<ul className="flex text-[18px] gap-10 text-white ">
				{navItemList.map((navItemList, index) => (
					<li
						className="relative hover:text-secondary hover:duration-[200ms] duration-[200ms] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-[100%] after:bg-secondary after:rounded-md after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-[200ms] "
						key={index}
					>
						<Navitems
							navTo={navItemList.navName}
							navName={navItemList.navName}
						/>
					</li>
				))}
			</ul>

      <div>
        Profile
      </div>
		</nav>
	);
}

export default Navbar;
