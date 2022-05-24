// определяет цвет клетки

const highlightCell = (cellAddress, cellFigure, player) => {
  // зарефачить под черного игрока
  if (!cellFigure) {
    return '';
  }

  if (cellFigure.toUpperCase() === cellFigure) {
    return cellAddress;
  }
}

export {highlightCell};