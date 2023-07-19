import PropTypes from "prop-types";

function Navitems({ navTo, navName }) {
  return (
    <a href={navTo}>
      {navName}
    </a>
  );
}

Navitems.propTypes   = {
  navTo: PropTypes.string.isRequired,
  navName: PropTypes.string.isRequired,
};

export default Navitems;
