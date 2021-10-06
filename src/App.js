const ROOMS = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 },
];

const App = () => {
  return <RoomViewer rooms={ROOMS}></RoomViewer>;
};

const RoomViewer = (props) => {
  return (
    <ol>
      {props.rooms.map((room) => (
        <li>
          {room.room_type}, {room.vacant_rooms}, ${room.price}
        </li>
      ))}
    </ol>
  );
};
export default App;
