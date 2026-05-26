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
        // Sprawdzenie, czy obiekt move ma poprawne dane
        if (!move || !move.from || !move.to) {
            return false;
        }

        // Obliczamy różnicę pozycji (dystans w osi X i Y)
        const deltaX = Math.abs(move.to.x - move.from.x);
        const deltaY = Math.abs(move.to.y - move.from.y);

        // Król nie może "ruszyć się" na to samo pole, na którym stoi
        if (deltaX === 0 && deltaY === 0) {
            return false;
        }

        // Król może ruszyć się o maksymalnie 1 pole w każdym kierunku
        // Oznacza to, że zarówno deltaX, jak i deltaY nie mogą być większe niż 1
        return deltaX <= 1 && deltaY <= 1;
    }
}