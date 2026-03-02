// Hill Climbing Algorithm in JavaScript

// Example objective function: f(x) = -(x-3)^2 + 10 (maximum at x=3)
function objective(x) {
    return -(x - 3) ** 2 + 10;
}

// Generate a neighbor by adding a small random value to x
function getNeighbor(x) {
    const stepSize = 0.1;
    return x + (Math.random() * 2 - 1) * stepSize;
}

// Hill Climbing main function
function hillClimb(start, maxIterations = 1000) {
    let current = start;
    let currentScore = objective(current);

    for (let i = 0; i < maxIterations; i++) {
        const neighbor = getNeighbor(current);
        const neighborScore = objective(neighbor);

        if (neighborScore > currentScore) {
            current = neighbor;
            currentScore = neighborScore;
        }
    }

    return { solution: current, score: currentScore };
}

// Example usage
const result = hillClimb(0);
console.log(`Best solution: x = ${result.solution}, score = ${result.score}`);