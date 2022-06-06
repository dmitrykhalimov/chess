import React, { Component } from 'react';
import {connect} from 'react-redux'

const COUNT = 10;

class Turns extends Component {
  constructor(props) {
    super(props);

    this.cellName = props.cellName;
    this.rowName = props.rowName;
    
    this.cellAddress = `${this.rowName}${this.cellName}`
  }

  adaptHistory(history) {
    const result = history.reduce((acc, item) => {
      if (acc.length < item.configuration.fullMove) {
        acc.push([])
      }
      acc[item.configuration.fullMove - 1].push(item);
      
      return acc;
    },[])

    // console.log(result);
    return result;
  }

  componentDidUpdate() {
    // console.log('Изменились ходы');
    this.adaptHistory(this.props.history);
    // console.log(this.props.history);
  }
  render() {
    return (
      <aside className="turns">
        <div className="turns__wrapper">
          <h2>Ходы игроков</h2>
          <ul className="turns__list">
            {this.adaptHistory(this.props.history).map((item, index) => {
              return <li key={`turn${index}`}className="turns__item">
                <b className="turns__number">{index}</b>
                {item.map((item) => {
                  return <span>{item.from} - {item.to}</span>
                })}
              </li>;
            })}
          </ul>
        </div>
      </aside>
    );
  }
}


// function mapStateToProps(state) {
//   return {
//     history: state.history,
//   }
// }
export default Turns;