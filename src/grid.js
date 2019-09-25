import React, {Component} from 'react'; 

class Grid extends Component {
    handleClick() {
        this.props.dropTile(this.props.col) 
    }
    
    render() {
        return (
            <div className="cell" onClick={() => this.handleClick()}>
                <p className="tile">
                    {this.props.row}, {this.props.col}
                </p>
            </div>
        )
    }
};

export default Grid 