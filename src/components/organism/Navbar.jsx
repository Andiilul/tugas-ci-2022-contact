import { useState, useEffect } from "react";
import Navitems from "../atoms/Navitems";
import reactLogo from "../../assets/react.svg"

export default function Navbar() {
	const navItemList = [
		{
			name: "Home",
			href: "/",
      title:""
		},
    {
      name: "Features",
      href: "/",
      title:""
    },
		{
			name: "Contacts",
			href: "/",
      title:""
		},
		{
			name: "About",
			href: "https://github.com/Andiilul",
      title:"https://github.com/Andiilul"
		},
	];

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			console.log(scrollY);
			setIsScrolled(scrollY >= 200);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const Transition = isScrolled
		? "bg-[rgba(38,38,38,0.7)] animate-topToBot fixed text-white bg-dark shadow-lg "
		: "bg-transparent absolute text-antiwhite animate-botToTop";

	return (
		<nav
			className={`${Transition} z-[100] top-0 w-full  p-[16px_64px] backdrop-blur-[6px]  flex items-center justify-between `}
		>
			<section className="text-[32px] font-light select-none flex gap-[10px]">
				<p className="font-[Philosopher] ">ReactContact</p>
        <img draggable={false} src={reactLogo}></img>
			</section>
			<section className="flex gap-8 ">
				{navItemList.map((item, index) => (
					<Navitems
						key={index}
						scrolled={isScrolled}
						name={item.name}
						navTo={item.href}
            title={item.title}
					/>
				))}
			</section>
		</nav>
	);
}
