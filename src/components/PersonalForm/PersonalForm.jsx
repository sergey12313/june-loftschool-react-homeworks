import React from 'react';
import './PersonalForm.css';

export default class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  handleChangeForm = ({ target: { name, value } }) => {
    this.props.onChangeForm(name, value);
  };
  render() {
    return (
      <form className="personal-form" data-test="personal-form">
        <input type="text" name="firstName" onChange={this.handleChangeForm} />
        <input type="text" name="lastName" onChange={this.handleChangeForm} />
        <input type="email" name="email" onChange={this.handleChangeForm} />
      </form>
    );
  }
}
