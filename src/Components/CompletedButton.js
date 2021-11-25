const CompletedButton = (props) => {
  return (
    <div>
      <button
        className="mainButtons"
        onClick={() => {
          props.handleClick(true);
        }}
      >
        Completed actions
      </button>{" "}
      {/* attributes!! */}
    </div>
  );
};

export default CompletedButton;
