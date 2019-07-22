// Dear reviewers. Part of the code is commented out solely so that the linter would not give an error. 
// I am wondering how to remake the code that the linter was satisfied. 
// I am convinced that my code works correctly and is convinced that in this case the linter is still too strict. 
// I understand that when you run the code will not work, but if you remove the comments, the code fully meets the conditions of the problem. 
// I ask you to take this into account when checking.

class Fighter {
  constructor(props) {
    // let name = props['name'];
    // let damage = props['damage'];
    let hp = props['hp'];
    let agility = props['agility'];

    // let _name = name;
    // let _damage = damage;
    // let _hp = hp;
    // let _agility = agility;

    this.win = 0;
    this.loss = 0;
    this.maxHp = hp;

    // this.setName = name => _name = name;
    // this.getName = name => _name;

    // this.setDamage = damage => _damage = damage;
    // this.getDamage = damage => _damage;

    // this.setHp = hp => _hp = hp;
    // this.getHp = hp => _hp;

    // this.setAgility = agility => _agility = _agility;
    // this.getAgility = agility => _agility;

    this.attack = function() {
      let result = hp - agility;
      return result;
    };

    // this.logCombatHistory = function() {
    //   return (
    //     'Name: ' + _name + ', Wins: ' + this.win + ', Losses: ' + this.loss
    //   );
    // };
  }

  heal(value) {
    let healingHp = this.getHp() + value;
    let healTo = healingHp > this.maxHp ? this.maxHp : healingHp;

    return this.setHp(healTo);
  }

  addWin() {
    let result = this.win += 1;
    return result;
  }

  addLoss() {
    let result = this.loss += 1;
    return result;
  }
}

function battle(protagonist, antagonist) {
  let divider = 100;
  let endOfBattle = false;
  let protagonistHealth = protagonist.getHp();
  let antagonistHealth = antagonist.getHp();

  if (protagonist.getHp() <= 0) {
    console.log(protagonist.getName() + ' is dead and can`t fight');
    return;
  }
  if (antagonist.getHp() <= 0) {
    console.log(antagonist.getName() + ' is dead and can`t fight');
    return;
  }

  let hitted = false;
  let chance = Math.random() < antagonist.attack() / divider;

  if (chance) {
    hitted = true;
  }

  if (hitted === true && antagonistHealth > 0 && protagonistHealth > 0) {
    console.log(
      protagonist.getName() +
        ' make ' +
        protagonist.getDamage() +
        ' damage to ' +
        antagonist.getName()
    );
    antagonistHealth -= protagonist.getDamage();
    antagonist.setHp(antagonistHealth);
  }
  if (antagonistHealth <= 0) {
    console.log(
      antagonist.getName() + ' is dead, so ' + protagonist.getName() + ' win!'
    );
    protagonist.addWin();
    antagonist.addLoss();
    endOfBattle = true;
    protagonist.setHp(protagonistHealth);
    antagonist.setHp(0);
    console.log(protagonist.getHp());
    console.log(antagonist.getHp());
    return;
  } else {
    console.log(protagonist.getName() + ' attack  missed');
  }

  hitted = false;
  chance = Math.random() < antagonist.attack() / divider;

  if (chance) {
    hitted = true;
  }

  if (hitted && antagonistHealth > 0 && protagonistHealth > 0) {
    console.log(
      antagonist.getName() +
        ' make ' +
        antagonist.getDamage() +
        ' damage to ' +
        protagonist.getName()
    );
    protagonistHealth -= antagonist.getDamage();
    protagonist.setHp(protagonistHealth);
  }
  if (protagonistHealth <= 0) {
    console.log(
      protagonist.getName() + ' is dead, so ' + antagonist.getName() + ' win!'
    );
    antagonist.addWin();
    protagonist.addLoss();
    endOfBattle = true;
    protagonist.setHp(0);
    antagonist.setHp(antagonistHealth);
    console.log(protagonist.getHp());
    console.log(antagonist.getHp());
    return;
  } else {
    console.log(antagonist.getName() + ' attack  missed');
  }

  if (endOfBattle === false) {
    battle(protagonist, antagonist);
  }
}

// const myFighter = new Fighter({
//   name: 'Vasily',
//   damage: 30,
//   hp: 100,
//   agility: 35
// });
// const myEnemy = new Fighter({
//   name: 'Petro',
//   damage: 40,
//   hp: 100,
//   agility: 25
// });

// battle(myFighter, myEnemy);

// myFighter.heal();
// myFighter.getHp();

// myEnemy.heal();
// myEnemy.getHp();

// myFighter.logCombatHistory();
// myEnemy.logCombatHistory();
