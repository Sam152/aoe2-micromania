import RoomStatus from './RoomStatus';

const RoomStatusLabel = new Map<RoomStatus, string>([
    [RoomStatus.Started, 'Started'],
    [RoomStatus.Gathering, 'Gathering'],
    [RoomStatus.Completed, 'Complete'],
]);

export default RoomStatusLabel;
