import React, {Component} from 'react'; 

class Grid extends Component {
    handleClick() {
        // drop the stone 
    }
    
    render() {
        return (
            <div className="cell" onClick={() => this.handleClick()}>
                <p>
                    {this.props.row}, {this.props.col}
                </p>
            </div>
        )
    }
};

export default Grid 