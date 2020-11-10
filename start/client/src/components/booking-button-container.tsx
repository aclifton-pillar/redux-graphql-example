import React from 'react';

const bookingHandler = (id: any) => {
    console.log('booked ' + id);
};

const BookingButtonContainer: React.FC<any> = ({ id, site, rocket, bookFlight }: any) => {
    return (
        <div className='book-flight'>
            <button onClick={() => bookFlight(id)}>{'Book Flight'}</button>
        </div>
    );
};

export default BookingButtonContainer;