/**
 * Created by malcolmj on 6/6/2016.
 */
export class Start{
  constructor(){
    this.heading = 'Testing';
    this.firstName = 'Malcolm';
    this.lastName = 'Jack';
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  start(){
    alert(`Hi, ${this.fullName}!`);
  }
}
