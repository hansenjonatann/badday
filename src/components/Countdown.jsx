import { Component } from "react";
import Message from "./Message";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: this.calculateCountdownTime(),
    };
  }

  calculateCountdownTime() {
    const targetDate = new Date("2023-09-27 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const showMessage = () => {
      <Message />;
    };

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        countdown: this.calculateCountdownTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.countdown;

    return (
      <>
        <div className="countdown">
          <div className="countdown-item"> {days} Days</div>
          <span className="space"></span>
          <div className="countdown-item"> {hours} Hours</div>
          <span className="space"></span>
          <div className="countdown-item"> {minutes} Minutes</div>
          <span className="space"></span>

          <div className="countdown-item"> {seconds} Seconds</div>
        </div>
      </>
    );
  }
}

export default Countdown;
