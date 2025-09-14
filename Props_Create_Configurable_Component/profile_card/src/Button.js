import React from "react";
import PropTypes from "prop-types";

function Button({ text, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        color: "white",
        cursor: "pointer",
        marginTop: "10px",
        margin: "0 8px 8px 0"
      }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "blue"
};

export default Button;
