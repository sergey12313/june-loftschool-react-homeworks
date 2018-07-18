import React, { Component } from "react";
import CardForm from '../CardForm/CardForm';
import PersonalForm from '../PersonalForm/PersonalForm';
import Step from '../Step/Step';
import Title from '../Title/Title';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            cardNumber: ''
        };
    }
    
    handleTabClick = event => {
        this.setState({
            step: event
        });
    }

    //НЕ ПОНИМАЮ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    handleChangeForm = (call, value) => {
        // const { name, value } = e.target;
        this.setState({
            [call]: value
        });
    }

    handleClickNextForm = e => {
        if (this.state.step !== 3) {
            this.setState({
                step: this.state.step + 1
            });
        } else {
            e.preventDefault();
        }        
    }

    isFormCommitable = e => {
        const { firstName, lastName, email, cardNumber, step } = this.state;

        switch (step) {
            case 1:
                const valueRequired = [firstName, lastName, email];
                return !valueRequired.includes('') && email.includes('@');
            case 2:
                return cardNumber.length === 16;
            default:
                return false;
        }
    }

    renderForm = () => {
        const { firstName, lastName, email, cardNumber, step } = this.state;

        const personalForm = (
            <PersonalForm
                firstName={firstName}
                lastName={lastName}
                email={email}
                onChangeForm={this.handleChangeForm}
            />
        );

        const cardForm = (
            <CardForm
                cardNumber={cardNumber}
                onChangeForm={this.handleChangeForm}
            />
        );

        const theEnd = <p data-test="congratulations">Поздравляем!</p>;

        return step === 1 ? personalForm : step === 2 ? cardForm : theEnd;
    }

    render() {
        const { step } = this.state;
        const stepsList = ['Personal information', 'Card information', 'Finish'];
        const stepsComponent = (text, index) => (
          <Step
            key={text}
            number={index}
            isClickable={index < step}
            isSelected={index === step}
            onClick={this.handleTabClick}
          >
            {text}
          </Step>
        );

        return (
            <div className="container">
                <div className="tab-panel">
                    {stepsList.map((step, i) => stepsComponent(step, i + 1))}
                </div>

                <div className="form-content">
                    <Title step={step} />
                    {this.renderForm()}
                </div>

                <div className="button-panel">
                    <button 
                        className="button-next"
                        onClick={this.handleClickNextForm}
                        disabled={!this.isFormCommitable()}
                    >
                        Next
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
