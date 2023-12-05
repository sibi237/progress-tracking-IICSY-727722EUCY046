import React, { Component } from 'react';

class TimerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  componentDidMount() {
    // Additional setup if needed
  }

  componentWillUnmount() {
    // Clean up any intervals or timeouts
    clearInterval(this.timerInterval);
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(() => {
        this.setState((prevState) => ({ time: prevState.time + 1 }));
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.state.isRunning) {
      this.setState({ isRunning: false });
      clearInterval(this.timerInterval);
    }
  };

  resetTimer = () => {
    this.setState({ time: 0, isRunning: false });
    clearInterval(this.timerInterval);
  };

  render() {
    return (
      <div>
        <h1>Timer: {this.state.time} seconds</h1>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default TimerApp;
