class Counter extends React.Component {
  state = {
    count: 0,
    result: 0,
  };

  handleMathClick(type, number) {
    //debugger;
    let value = 0;
    let reset = 1;
    switch (type) {
      case "substraction":
        value = -number;
        break;
      case "addition":
        value = +number;
        break;
      case "reset":
        reset = 0;
        break;
    }
    this.setState((prevState) => ({
      count: ++prevState.count,
      result: (prevState.result + value) * reset,
    }));
  }

  handleMathClick = this.handleMathClick.bind(this);

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number="10"
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="RESET"
          number="1"
          type="reset"
          click={this.handleMathClick}
        />
        <MathButton
          name="+1"
          number="1"
          type="addition"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const MathButton = (props) => {
  return (
    <button
      onClick={function () {
        props.click(props.type, props.number);
      }}
    >
      {props.name}
    </button>
  );
};

const ResultPanel = (props) => {
  return (
    <React.Fragment>
      <h1> Click number:{props.count} </h1>
      <h1>Result: {props.result}</h1>
    </React.Fragment>
  );
};
ReactDOM.render(<Counter />, document.getElementById("root"));
