// Klasa reprezentująca wieżę
class Rook {

    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {

        // ruch poziomy
        if (move.sourceY === move.destinationY) {
            return true;
        }

        // ruch pionowy
        if (move.sourceX === move.destinationX) {
            return true;
        }

        return false;
    }
}

module.exports = Rook;