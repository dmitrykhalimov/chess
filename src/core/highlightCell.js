// определяет цвет клетки

const highlightCell = (cellAddress, cellFigure, player) => {
  console.log('test', cellAddress, cellFigure, player);
  // зарефачить под черного игрока
  if (!cellFigure) {
    return '';
  }

  if (player === 'white' && cellFigure.toUpperCase() === cellFigure) {
    return cellAddress;
  }

  if (player === 'black' && cellFigure.toLowerCase() === cellFigure) {
    return cellAddress;
  }
}

export {highlightCell};