// ============================================
// Particle Swarm Optimization (PSO) Algoritmus
// ============================================

/**
 * PSO Algoritmus - egy egyszerű megvalósítás
 * A PSO egy populáció-alapú optimalizálási módszer,
 * amely a madarak rajzása által ihlette.
 */

class PSO {
  constructor(objectiveFunction, numParticles = 30, dimensions = 2, maxIterations = 100) {
    // A célfüggvény, amit minimalizálni akarunk
    this.objectiveFunction = objectiveFunction;
    
    // PSO paraméterek
    this.numParticles = numParticles;        // Részecskék száma
    this.dimensions = dimensions;             // Keresési tér dimenziói
    this.maxIterations = maxIterations;       // Maximális iterációk száma
    
    // PSO súlyok (random 0-1 középpontú súlyok)
    this.w = 0.7;                             // Inercia súly (múltbeli sebesség befolyása)
    this.c1 = 1.5;                            // Kognitív paraméter (saját legjobb felé húzás)
    this.c2 = 1.5;                            // Szociális paraméter (globális legjobb felé húzás)
    
    // Keresési tér határai
    this.minBound = -10;
    this.maxBound = 10;
    
    // Részecskék inicializálása
    this.particles = [];
    this.globalBestPosition = null;
    this.globalBestValue = Infinity;
    
    this._initializeParticles();
  }

  /**
   * Részecskék inicializálása
   */
  _initializeParticles() {
    for (let i = 0; i < this.numParticles; i++) {
      const particle = {
        position: [],      // Jelenlegi pozíció
        velocity: [],      // Jelenlegi sebesség
        bestPosition: [],  // Eddig talált legjobb pozíció
        bestValue: Infinity // Eddig talált legjobb érték
      };

      // Pozíciók és sebességek random inicializálása
      for (let d = 0; d < this.dimensions; d++) {
        particle.position[d] = this._randomBetween(this.minBound, this.maxBound);
        particle.velocity[d] = this._randomBetween(-1, 1);
        particle.bestPosition[d] = particle.position[d];
      }

      // Részecske értékelése
      particle.bestValue = this.objectiveFunction(particle.position);

      // Globális legjobb frissítése
      if (particle.bestValue < this.globalBestValue) {
        this.globalBestValue = particle.bestValue;
        this.globalBestPosition = [...particle.bestPosition];
      }

      this.particles.push(particle);
    }
  }

  /**
   * Random szám generálása két érték között
   */
  _randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * PSO algoritmus futtatása
   */
  run() {
    console.log('PSO algoritmus indult...');
    console.log(`Részecskék: ${this.numParticles}, Iterációk: ${this.maxIterations}`);

    // Iterációk
    for (let iteration = 0; iteration < this.maxIterations; iteration++) {
      // Minden egyes részecske frissítése
      for (let i = 0; i < this.numParticles; i++) {
        const particle = this.particles[i];

        // Sebesség frissítése az PSO egyenlet alapján
        for (let d = 0; d < this.dimensions; d++) {
          const r1 = Math.random();  // Random szám 1 (kognitív)
          const r2 = Math.random();  // Random szám 2 (szociális)

          // PSO sebesség frissítési egyenlet
          particle.velocity[d] =
            this.w * particle.velocity[d] +                              // Inercia
            this.c1 * r1 * (particle.bestPosition[d] - particle.position[d]) + // Saját legjobb
            this.c2 * r2 * (this.globalBestPosition[d] - particle.position[d]);  // Globális legjobb
        }

        // Pozíció frissítése
        for (let d = 0; d < this.dimensions; d++) {
          particle.position[d] += particle.velocity[d];

          // Határok betartása (ha kilép, visszahozzuk)
          if (particle.position[d] < this.minBound) {
            particle.position[d] = this.minBound;
          }
          if (particle.position[d] > this.maxBound) {
            particle.position[d] = this.maxBound;
          }
        }

        // Új pozíció értékelése
        const value = this.objectiveFunction(particle.position);

        // Részecske legjebb értékének frissítése
        if (value < particle.bestValue) {
          particle.bestValue = value;
          particle.bestPosition = [...particle.position];

          // Globális legjobb frissítése
          if (value < this.globalBestValue) {
            this.globalBestValue = value;
            this.globalBestPosition = [...particle.bestPosition];
          }
        }
      }

      // Státusz kiírás
      if ((iteration + 1) % 10 === 0) {
        console.log(`Iteráció ${iteration + 1}/${this.maxIterations}, Legjobb érték: ${this.globalBestValue.toFixed(6)}`);
      }
    }

    console.log('PSO algoritmus kész!');
    return {
      bestPosition: this.globalBestPosition,
      bestValue: this.globalBestValue
    };
  }

  /**
   * Eredmények lekérése
   */
  getResult() {
    return {
      position: this.globalBestPosition,
      value: this.globalBestValue
    };
  }
}

// ============================================
// TESZT: Egyszerű Rastrigin függvény minimalizálása
// ============================================

// Rastrigin függvény (sok helyi optimummal rendelkezik)
function rastriginFunction(position) {
  const A = 10;
  const n = position.length;
  let sum = A * n;
  
  for (let i = 0; i < n; i++) {
    sum += position[i] * position[i] - A * Math.cos(2 * Math.PI * position[i]);
  }
  
  return sum;
}

// PSO futtatása
const pso = new PSO(rastriginFunction, 30, 2, 100);
const result = pso.run();

console.log('\n========== VÉGEREDMÉNY ==========');
console.log('Legjobb pozíció:', result.bestPosition);
console.log('Legjobb érték:', result.bestValue
    
);
