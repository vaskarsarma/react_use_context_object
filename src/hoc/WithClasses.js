import React, { Component } from 'react';

// const WithClass = (props) => (
//     <div className={props.Class} >
//         {props.children}
//     </div>
// );

// const WithClasses = (WrappedComponent, classes) => {
//     return(props) => 
//     (
//        <div className={classes} >
//          <WrappedComponent {...props}/>
//      </div> 
//     )
// };
const WithClasses = (WrappedComponent, classes) => {
    return class extends Component {
        render() {
            return (
                <div className={classes} >
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
};

export default WithClasses;