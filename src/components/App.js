import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      sum: 0,
      donates:[]
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $heading = document.createElement('h1');
    $heading.className = 'total-amount';
    $heading.textContent = `${props.title}`

    this.$span = document.createElement('span');
    this.$span.textContent = `${this.state.sum}`
    $heading.appendChild(this.$span);

    this.$rootElement.appendChild($heading);
    
    const $donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild($donateForm.$rootElement);


    this.$donateList = new List();
    this.$rootElement.appendChild(this.$donateList.$rootElement);

    this.onItemDelete = this.onItemDelete.bind(this);
  }
  
  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onRemove: this.onItemDelete
    });
    this.state.donates.push(item);
    this.state.sum += amount;
    this.$span.textContent = `${this.state.sum}`;
    this.$donateList.addItem(item);
    console.log(this.state.donates);
  }
  onItemDelete(id, amount){
    this.state.donates = this.state.donates.filter(item => item.state.id !== id);
    this.state.sum -= amount;
    this.$span.textContent = `${this.state.sum}`;
    const itemToRemove = this.$donateList.$donatesContainer.querySelector(`.donate-item[data-id="${id}"]`);
    console.log(itemToRemove);
    if (itemToRemove) {
      this.$donateList.onRemove(itemToRemove);
    }
  }
}
