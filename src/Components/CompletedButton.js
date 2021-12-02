const CompletedButton = (props) => {
  return (
    <div>
      <button
        className="mainButtons"
        onClick={() => {
          props.handleClick(true);
        }}
      >
        Completed tasks
      </button>{" "}
      {/* attributes!! */}
    </div>
  );
};

export default CompletedButton;
