import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: this.props.amount,
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.dataset.id = this.state.id;
    this.$rootElement.innerHTML = `${this.state.date.getDate()}/${this.state.date.getMonth() + 1}/${this.state.date.getFullYear()}, ${this.state.date.getHours()}:${this.state.date.getMinutes()}:${this.state.date.getSeconds()} - <b>${this.state.amount}$</b>`;

    this.$deleteBtn = document.createElement('button');
    this.$deleteBtn.className = 'delete-button';
    this.$deleteBtn.textContent = 'Удалить';
    this.$deleteBtn.addEventListener('click', () => {
      if (props.onRemove){
        props.onRemove(this.state.id, this.state.amount);
      }
    })
    this.$rootElement.appendChild(this.$deleteBtn)


  }
}
