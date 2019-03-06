import { h, Component } from "preact";

export class App extends Component {
  maxCount: number = 10;
  recValues = [];

  constructor() {
    super();
  }
  componentDidMount() {
    this.getSequence();
    console.log("Recursive Values: ");
    this.getRecursiveSequence();
    this.noArraySequence();
  }

  getSequence() {
    let values = [];

    console.log("Array Values: ");

    for (let i = 0; i < this.maxCount; i++) {
      if (i === 0) {
        values[i] = 0;
        values.push(values[i]);
      } else if (i === 1) {
        values[i] = 1;
        values.push(values[i]);
      } else {
        values[i] = values[i - 2] + values[i - 1];
        values.push(values[i]);
      }
      console.log(values[i]);
    }
  }

  getRecursiveSequence(index = 0) {
    if (index < this.maxCount) {
      if (index === 0) {
        this.recValues[index] = 0;
        this.recValues.push(this.recValues[index]);
        index++;
      } else if (index === 1) {
        this.recValues[index] = 1;
        this.recValues.push(this.recValues[index]);
        index++;
      } else {
        this.recValues[index] = this.recValues[index - 1] + this.recValues[index - 2];
        this.recValues.push(this.recValues[index]);
        index++;
      }
      console.log(this.recValues[index]);

      this.getRecursiveSequence(index);
    } else {
      return null;
    }
  }

  noArraySequence() {
    let index = 0;
    let n1 = 1;
    let n2 = 0;
    let temp;

    console.log("NoArraySequence: ");

    while (index < this.maxCount) {
      temp = n1 + n2;
      console.log(temp);
      n2 = n1;
      n1 = temp;
      index++;
    }
  }
  render(): JSX.Element {
    return <div />;
  }
}
