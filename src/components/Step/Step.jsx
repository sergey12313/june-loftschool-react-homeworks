import React from 'react';
import './Step.css';

export default class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  handleClick = () => {
    const { number, isClickable, onClick } = this.props;
    if (isClickable) {
      onClick(number);
    }
  };
  render() {
    const { isSelected, isClickable, number, children } = this.props;
    const classNames = () => {
      return `step${isSelected ? ' step-selected' : ''}${
        isClickable ? ' step-clickable' : ''
      } `;
    };

    return (
      <div
        className={classNames()}
        onClick={this.handleClick}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}
