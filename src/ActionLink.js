function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    // To prevent default behaviour of the link
    console.log('The link was clicked');
  }

  return (
    <a
      href="https://www.google.com"
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      Click this link
    </a>
  );
}

export default ActionLink;
