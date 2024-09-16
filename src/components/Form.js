import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount:''
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $label = document.createElement('label');
    $label.className = 'donate-form__input-label';
    $label.textContent = 'Введите сумму в $';
    this.$rootElement.appendChild($label);

    this.$input = document.createElement('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.setAttribute('name', 'amount')
    this.$input.setAttribute('type', 'number')
    this.$input.setAttribute('min', '1')
    this.$input.setAttribute('max', '100')
    this.$input.setAttribute('required', '')

    this.$button = document.createElement('button');
    this.$button.className = 'donate-form__submit-button';
    this.$button.setAttribute('type', 'submit');
    this.$button.textContent = 'Задонатить';


    $label.appendChild(this.$input);
    this.$rootElement.appendChild(this.$button);

    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
  }

  isValid(){
    return this.state.amount <= 100 && this.state.amount >= 1;
  }

  handleInput(event) {
    const count = +event.target.value;
    this.state.amount = count;
    this.isValid() ? this.$button.disabled = false : this.$button.disabled = true;
    console.log(typeof count,count)
    console.log(this.isValid())
  }

  handleSubmit(event) {
      event.preventDefault()
      if(this.isValid()){
        this.props.onSubmit(+this.state.amount)
        this.state.amount = '';
        this.$input.value = ''
    }
  }
}
