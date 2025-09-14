# Props : Create a Configurable Component

This assignment was done by modifying Profile Card project from [JSX_and_Components](https://github.com/LokeshBhaskarNR/React_Assignment_1/tree/main/JSX_and_Components)

Usage of props --> 
- reusable dynamic profile cards and buttons
- Set default values to parameters in function

Code :
```
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
```
