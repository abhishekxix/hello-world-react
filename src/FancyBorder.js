const Composition = {
  FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  },

  WelcomeDialog() {
    return (
      <this.FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
      </this.FancyBorder>
    );
  },

  SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">{props.left}</div>
        <div className="SplitPane-right">{props.right}</div>
      </div>
    );
  },

  Runner() {
    return <this.SplitPane left={<h1>left</h1>} right={<h1>right</h1>} />;
  },
};
