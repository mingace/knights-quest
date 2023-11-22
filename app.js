document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const rows = 8;
    const cols = 8;       
    const pieces =["rook","knight","bishop","king","queen","bishop","knight","rook"];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            let element = document.createElement('div');
            let chessPiece = document.createElement('img');
            
            element.style.backgroundColor = (row + col) % 2 == 0 ? "#eeeed3" : "#8a4b38";

            if (row === 0 || row === 7) {
                chessPiece.src = (row / 8) % 2 == 0 ? `img/black_${pieces[col]}.png`:`img/white_${pieces[col]}.png`;
            }
            else if (row === 1 || row === 6) {
                chessPiece.src = (row % 2 == 0) ? 'img/white_pawn.png':'img/black_pawn.png';
            }
            
            element.appendChild(chessPiece);

            board.appendChild(element);
        }
    }
});