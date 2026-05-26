// Klasa reprezentująca króla
// class King {
//     constructor() {
//         this.type = "KING";
//     }

//     validateMove(move) {
        
//         // dokoncz implementacje
//         return false;
//     }
// }
// Klasa reprezentująca króla
class King {
    constructor() {
        this.type = "KING";
    }

validateMove(move) {
        // Zabezpieczenie przed pustym obiektem
        if (!move) {
            return false;
        }

        // Pobieramy współrzędne z Twoich pól: sourceX, sourceY, destinationX, destinationY
        const deltaX = Math.abs(move.destinationX - move.sourceX);
        const deltaY = Math.abs(move.destinationY - move.sourceY);

        // Król nie może ruszyć się na to samo pole
        if (deltaX === 0 && deltaY === 0) {
            return false;
        }

        // Król porusza się o maksymalnie jedno pole w każdym kierunku
        return deltaX <= 1 && deltaY <= 1;
    }
}