// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {

        const dx = Math.abs(move.to.x - move.from.x);
        const dy = Math.abs(move.to.y - move.from.y);

        // ruch pionowy lub poziomy
        if ((dx > 0 && dy === 0) || (dy > 0 && dx === 0)) {
            return true;
        }

        return false;
    }
}

export default Rook;