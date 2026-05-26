// Klasa reprezentująca skoczka / konika
class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);

        // Skoczek: ruch w kształcie litery L
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}
