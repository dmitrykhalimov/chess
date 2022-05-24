// определяет цвет клетки

const cellColor = (cellAddress) => {
  const xCode = cellAddress.charCodeAt(0); 
  const yCode = cellAddress.charCodeAt(1); 

  return ((xCode + yCode) % 2 !== 0);
}

export {cellColor};