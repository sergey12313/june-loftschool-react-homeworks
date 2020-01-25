import React from 'react';
import './CardForm.css';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  handleChangeForm = ({ target: { name, value } }) => {
    this.props.onChangeForm(name, value);
  };
  componentWillUnmount() {}
  render() {
    return (
      <form className="card-form" data-test="card-form">
        <input   type="text" name="cardNumber" onChange={this.handleChangeForm} />
      </form>
    );
  }
}
