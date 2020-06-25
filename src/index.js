import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Function components are a simpler way to write components that only contain a render method
// and don't have their own state. Instead of defining a class which extends React.Component,
// we can write a function that takes props as input and returns what should be rendered.
function Square(props) {
    return (
      // <button className="square" onClick={() => this.props.onClick}>
      <button className="square" onClick={props.onClick}>
          {props.value}
      </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        // In JavaScript classes, you need to always call super when defining the constructor of a subclass.
        // All React component classes that have a constructor should start with a super(props) call.
        super(props);

        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); // Create copy of the squares array because immutability is important.
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
<Game />,
    document.getElementById('root')
);
