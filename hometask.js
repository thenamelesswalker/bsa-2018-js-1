class Fighter {
	constructor (name, power, health) {
		this.name = name;
		this.power = power;
		this.health = health;
	}
	
	hit(enemy, point = 0) {
		enemy.setDamage(this.power * point);
	}
	
	setDamage(damage = 0) {
		this.health -= damage;
		console.log(`health: ${this.health}`);
	}
}

class ImprovedFighter extends Fighter {
	constructor (name, power, health) {
		super(name, power, health);
	}
	doubleHit(enemy, point = 0) {
		this.hit(enemy, 2 * point);
	}
}

let makeMove = (player1, player2, point) => {
	player1.hit(player2, point);
	if(player2.health <= 0) {
		console.log(`${player1.name} wins!`);
		return false;
	}
	return true;
};

function fight(fighter, improvedFighter, ...points) {
	for(i = 0; i < points.length; i++) {
		let result = (i % 2 === 0) ? makeMove(fighter, improvedFighter, points[i]) : makeMove(improvedFighter, fighter, points[i]);
		if(!result) {
			return;
		}
	}
}

let fighter1 = new Fighter("fighter1", 10, 100);
let fighter2 = new ImprovedFighter("fighter2", 20, 50);

fight(fighter1, fighter2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);