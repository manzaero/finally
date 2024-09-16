import { Component } from '../core/Component';
import { ListItem} from "./ListItem";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const h2 = document.createElement('h2');
    h2.className = 'donates-container__title';
    h2.textContent = 'Список донатов';

    this.$donatesContainer = document.createElement('div');
    this.$donatesContainer.className = 'donates-container__donates';

    this.$rootElement.append(h2);
    this.$rootElement.append(this.$donatesContainer);
  }

  addItem(item) {
    this.$donatesContainer.appendChild(item.$rootElement);
  }
  onRemove(item){
    this.$donatesContainer.removeChild(item)
  }
}