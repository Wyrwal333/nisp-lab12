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
    console.log("DEBUG KRÓLA:", move); // Zobacz w konsoli przeglądarki, co tu się wyświetla!
    
    if (!move || !move.from || !move.to) return false;
    
    const deltaX = Math.abs(move.to.x - move.from.x);
    const deltaY = Math.abs(move.to.y - move.from.y);
    
    if (deltaX === 0 && deltaY === 0) return false;
    
    return deltaX <= 1 && deltaY <= 1;
    
    }
}