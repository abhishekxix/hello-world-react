function UserGreeting() {
  return <h1>Welcome Back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

  // if (isLoggedIn) return <UserGreeting />;

  // return <GuestGreeting />;
}

export default Greeting;
