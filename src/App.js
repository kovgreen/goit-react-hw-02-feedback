import React, { Component } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import Feedback from "./Components/Feedback/Feedback";
import Notification from "./Components/Notification/Notification";

const options = Object.values(Feedback);
class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleFeedbackUpdate = e => {
    const feedbackOption = e.target.textContent;
    this.setState(state => ({
      [feedbackOption]: state[feedbackOption] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total) {
      return Math.round((good * 100) / total);
    }
    return 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = 0 || this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedbackUpdate}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
