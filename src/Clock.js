function Clock(props) {
  return (
    <div className="Clock">
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
