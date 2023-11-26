import React from 'react';
import { Seat } from 'bus-seat-structuring'; 

function App() {
  
  function booked_seats(clickedSeats){
    alert(clickedSeats);
  }

  return (
    <div className="App">
      <Seat 
            busmodel={'layland_seats_49'}
            bookedSeatsList={['0-1','3-2']}
            booked_seats={booked_seats}
            />
    </div>
  );
}

export default App;