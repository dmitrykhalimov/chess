const cellColor = (cellAddress) => {
  const xCode = cellAddress.charCodeAt(0); 
  const yCode = cellAddress.charCodeAt(1); 

  // console.log(cellAddress[0]);
  // console.log(cellAddress[1]);
  // console.log(cellAddress[0].charCodeAt(0));
  // console.log(cellAddress[1].charCodeAt(0));

  return ((xCode + yCode) % 2 === 0);
}

export {cellColor};