import {connect} from 'react-redux';
import Profile from "./profile";

export const mapStateToProps = (state: any): any => {
    return {
        bookings: state.bookings,
    };
};

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);