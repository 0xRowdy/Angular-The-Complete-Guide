export class Ingredient {
  /*
  * Important THIS IS SO COMMON THAT WE HAVE A NICE SHORTCUT
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  } */
  constructor(public name: string, public amount: number) {}
}
