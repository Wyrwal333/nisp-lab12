// Klasa reprezentująca królową / hetmana
class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {

        let dx = Math.abs(move.destinationX - move.sourceX);
        let dy = Math.abs(move.destinationY - move.sourceY);

        // królowa rusza się jak wieża albo jak goniec
        if (
            move.sourceX === move.destinationX || // pionowo
            move.sourceY === move.destinationY || // poziomo
            dx === dy                              // po skosie
        ) {
            return true;
        } else {
            return false;
        }
    }
}