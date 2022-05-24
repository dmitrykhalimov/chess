// определяет цвет клетки

const filterRowFigures = (pieces) => {
  const result = {
    A: {},
    B: {},
    C: {},
    D: {},
    E: {},
    F: {},
    G: {},
    H: {},
  };

  for (const [field, figure] of Object.entries(pieces)) {
    result[field[0]][field] = figure;
  }

  return result;
}

export {filterRowFigures};