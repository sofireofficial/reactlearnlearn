const modalContent = (
  <ol>
    <h2>Let's... </h2>
    <ul>
      <li>The 1st part of the 1st task in React Session 5</li>
      <li>
        Reviewing how my group created the timeline...{" "}
        <a href="https://cupcakemania.netlify.app/" target="blank">
          Cupcake Mania
        </a>
      </li>
      <li>How functions with parameters work</li>
      <li>Literally everything React! i.e. session2 (where is the button)</li>
    </ul>
    <br></br>
    <h2>I will...</h2>
    <ul>
      <li>
        Continue JS (S7,p.19), with filter & map (see W3Schools &
        Trial_Affirmations folder)
      </li>
      <li>Edit this JS file (specifically remove markup)</li>
      <li>Complete text resizing for the modal</li>
    </ul>
  </ol>
);

const ActionsContent = () => {
  return <div className="yellowModal">{modalContent}</div>;
};

export default ActionsContent;
