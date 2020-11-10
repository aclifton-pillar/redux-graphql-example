import React from 'react';

const BookingButtonContainer: React.FC<any> = ({ id, site, rocket, bookFlight, bookings }: any) => {
    console.log(bookings);
    return (
        <div className='book-flight'>
            <button onClick={() => bookFlight(id)}>{'Book Flight'}</button>
        </div>
    );
};

export default BookingButtonContainer;