class Counter extends React.Component {
  render() {
    return (
      <>
        <button>-1</button>
        <button>Reset</button>
        <button>+1</button>
        <h1>Click Count:</h1>
        <h1>Result:</h1>
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
