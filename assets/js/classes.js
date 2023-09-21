class Character { //PERSONAGEM PADRÃO
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor (name) { //NOME DO PERSONAGEM
    this.name = name;

  }
  get life (){
    return this._life;  //PEGA O LIFE
  }
  set life(newLife){
    this._life = newLife < 0 ? 0 : newLife; //Ñ DEIXA LIFE FICAR MENOR Q 0
  }
}


//PERSONAGENS

class Knight extends Character {
constructor(name){
  super(name);
  this.life = 100;
  this.attack = 10;
  this.defense = 8;
  this.maxLife = this.life;
}
}
class Sorcerer extends Character {
constructor(name){
  super(name);
  this.life = 80;
  this.attack = 15;
  this.defense = 3;
  this.maxLife = this.life;
}
}
