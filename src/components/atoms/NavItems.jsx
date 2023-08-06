import PropTypes from "prop-types";

Navitems.propTypes = {
	name: PropTypes.string.isRequired,
	navTo: PropTypes.string.isRequired,
	scrolled: PropTypes.bool.isRequired,
};

export default function Navitems(props) {
	const { name, navTo, scrolled} = props;

	const hoverColor = scrolled? 'hover:text-oranges after:bg-oranges':'hover:text-white after:bg-white'



	return (
		<button
			className={`${hoverColor} cursor-pointer font-[400] flex items-center justify-center p-2 flex-col after:content-[""] duration-300 after:rounded-lg after:-mt-1 after:w-0 after:h-[2px]  after:duration-300 hover:after:w-full hover:after:duration-300 text-[18px] `}
			href={navTo}
		>
			{name}
		</button>
	);
}
