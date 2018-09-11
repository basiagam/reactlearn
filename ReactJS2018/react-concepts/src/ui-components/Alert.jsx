import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({type,message,children,show, toggleAlert}) => {
    return (
        <div>
        {
            show &&
            <div onClick={toggleAlert} className={`alert alert-${type}`} role="alert">
            {message ? message: children}
            </div>
        }
        </div>
    );
};

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string,
    show: PropTypes.bool,
    toggleAlert: PropTypes.func
};

Alert.defaultProps = {
    message: null,
    show: true,
    toggleAlert() {}
};

// hide an element after showing it for 5 seconds
const withDismiss = (Component) => {
    class DismissableComponent extends React.Component{
        componentDidMount(){
            setTimeout(() => {
                this.props.toggleAlert();
            },5000);
        }
        render(){
            return <Component {...this.props} />;
        }
    }

    return DismissableComponent;
};

// a function
// takes component
// return enhanced component
const withAnimation = (Component) => {
    const AnimatedComponent = (props) => {
        return (
            <div className="wow bounceInUp">
                <Component {...props} />
            </div>
        );
    }
    return AnimatedComponent;
}

export const AnimatedAlert = withAnimation(Alert);

export const DismissableAlert = withDismiss(AnimatedAlert);

export default Alert;