
# Bus Seats Structuring

This is a fully open-source package that allows for easy importing of bus seat structures into your project. The primary purpose of developing this package is to assist university students in their academic projects.

## Authors

- [@nadun_sandeepa](https://www.linkedin.com/in/nadun-sandeepa-62aba9194/)


## Installation

To install this package into a React project, you can use npm

```bash
  npm install bus-seat-structuring@latest --force
```
    
## Usage/Examples

Upon importing the package, you can utilize the structure by using the **<Seat busmodel={''} bookedSeatsList={[]} booked_seats={booked_seats}/>** tag.

```javascript
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
            bookedSeatsList={[]}
            booked_seats={booked_seats}
            />
    </div>
  );
}
```

- **bookedSeatsList** - The list of booked seats. (Example : ['1-2', '3-4', '5-6'])

- **booked_seats** - When seats are booked, the updated information will be displayed.

- **busmodel** - Busmodel refers to the structure of the bus you desire. The list of available bus structures and their respective codes are as follows:

## Supported Bus Models

| Bus Model             | Code                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Ashok Layland seats 49 | layland_seats_49 |
| Ashok Layland seats 54 | layland_seats_54 |
| Volvo 9100 | volvo_9100 |


## Screenshots

**Before Bookings.**
![App Screenshot](https://i.imgur.com/vWuXe2Z.png)



**After bookings.**
The seats that are already reserved will be displayed in red. When a user clicks on a seat, it will change to a yellow color to indicate that it has been selected or clicked.

![App Screenshot](https://i.imgur.com/impwyFg.png)


## Support

For support, 
- email nadun2952@gmail.com
- LinkedIn : https://www.linkedin.com/in/nadun-sandeepa-62aba9194/

