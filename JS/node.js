class Password extends React.Component {
  state = {
    show: false
  };

  handleClick = () => {
    let changeShow =
      this.state.show === true
        ? (this.state.show = false)
        : (this.state.show = true);
    this.setState({
      show: changeShow
    });
  };
  render() {
    const { show } = this.state;
    return (
      <div className="password">
        {show ? (
          <input placeholder="Password" type="text" />
        ) : (
          <input placeholder="Password" type="password" />
        )}
        <div className="password-icon" onClick={this.handleClick}>
          {show ? (
            <span className="fa fa-fw fa-eye-slash"></span>
          ) : (
            <span className="fa fa-fw fa-eye"></span>
          )}
        </div>
      </div>
    );
  }
}
const Registration = ({ onClick }) => (
  <div className="card registration">
    <div className="card__side left">
      <h1 className="logo-text">
        web
        <br />
        addict
      </h1>
    </div>
    <div className="card__side right">
      <h2 className="glitch" data-text="Welcome">
        Welcome
      </h2>
      <img src="https://github.com/OlgaKoplik/CodePen/blob/master/logo.png?raw=true" />
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <Password />
        <button type="button">Registration</button>
      </form>
      <p>
        Already a member <a onClick={onClick}>Sign in</a>
      </p>
    </div>
  </div>
);

const SignIn = ({ onClick }) => (
  <div className="card signin">
    <div className="card__side left">
      <h1 className="logo-text">
        web
        <br />
        addict
      </h1>
    </div>
    <div className="card__side right">
      <h2 className="glitch black" data-text="Welcome">
        Welcome
      </h2>
      <img src="https://github.com/OlgaKoplik/CodePen/blob/master/logo-white.png?raw=true" />
      <form>
        <input placeholder="Email" />
        <Password />
        <button type="button">Sign In</button>
      </form>
      <p>
        No account yet? <a onClick={onClick}> Registration</a>
      </p>
    </div>
  </div>
);

class Form extends React.Component {
  state = {
    active: "registration"
  };

  handleClick = () => {
    const newActive =
      this.state.active === "registration" ? "signIn" : "registration";
    this.setState({
      active: newActive
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="wrap">
        {active === "registration" ? (
          <Registration onClick={this.handleClick} />
        ) : (
          <SignIn onClick={this.handleClick} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
