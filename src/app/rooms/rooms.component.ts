import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        amenities: 'AC, TV, Wifi',
        price: 1000,
        photos: 'https://picsum.photos/200/300',
        checkInTime: new Date('11-Jan-2023'),
        checkOutTime: new Date('12-Jan-2023'),
      },
      {
        roomNumber: 2,
        roomType: 'Super Deluxe',
        amenities: 'AC, TV, Wifi, Fridge',
        price: 2000,
        photos: 'https://picsum.photos/200/300',
        checkInTime: new Date('11-Jan-2023'),
        checkOutTime: new Date('12-Jan-2023'),
      },
      {
        roomNumber: 3,
        roomType: 'Luxury',
        amenities: 'AC, TV, Wifi, Fridge, Pool',
        price: 3000,
        photos: 'https://picsum.photos/200/300',
        checkInTime: new Date('11-Jan-2023'),
        checkOutTime: new Date('12-Jan-2023'),
      }
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}
