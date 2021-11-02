const ToggleBtn = ({ handleClick, btnClicked }) => {
  //toggle open menu
  return (
    <div
      className={`toggle_btn ${btnClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <div></div>
    </div>
  );
};
export default ToggleBtn;
