import React from 'react'; 

class Grid extends React.Component {
    constructor() {
    }


    handleClick() {
        // drop the stone 
    }
    
    render() {
        return (
            <div onClick={() => this.handleClick()}>
                <p>
                    {this.props.row}, {this.props.col}
                </p>
            </div>
        )
    }
};

export default Grid 