import {exportParty} from './engine'

const download = () => {
  const partyConfiguration = JSON.stringify(exportParty());
  const tempFile = document.createElement('a')
  tempFile.href = URL.createObjectURL(
    new Blob([partyConfiguration], {type: 'application/json'})
  )
  
  tempFile.download = "party.json"
  tempFile.click();
}

export {download};