import {connect} from 'react-redux';
import {bookFlight} from "./booking-action-creators";
import BookingButtonContainer from "./booking-button-container";

export const mapStateToProps = (state: any): any => {
    return {
        bookings: state.bookings,
    };
};

export const mapDispatchToProps = {
    bookFlight
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingButtonContainer);