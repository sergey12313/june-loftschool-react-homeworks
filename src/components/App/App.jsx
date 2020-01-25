import React, { Component } from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import Title from '../Title';

import './App.css';

export default class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };
  handleClickNextForm = () => {
    this.setState(({ step }) => ({ step: step + 1 }));
  };
  handleChangeForm = (name, value) => {
    this.setState(() => ({
      [name]: value
    }));
  };
  handleTabClick = number => {
    this.setState(() => ({ step: number }));
  };
  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      return (
        firstName !== '' &&
        lastName !== '' &&
        email !== '' &&
        email.includes('@')
      );
    } else if (step === 2) {
      return cardNumber.length === 16;
    } else {
      return false;
    }
  };
  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        ></PersonalForm>
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeTimeOver={this.onChangeTimeOver}
          onChangeForm={this.handleChangeForm}
        ></CardForm>
      );
    } else if (step === 3) {
        return ( <p data-test="congratulations">Поздравляем!</p>)
    }
  };
  render() {
    return (
      <div className="container">
          <Title>My Form</Title>
        <div className="tab-panel">
            <Step number={1}>Персональная информация</Step>
            <Step number={2}>Card info</Step>
            <Step number={3}>Congratulations</Step>
        </div>
        <div className="form-content">
            {this.renderForm()}
        </div>
        <div className="button-panel">
          <button disabled={!this.isFormCommitable()} className="button-next" onClick={this.handleClickNextForm}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
