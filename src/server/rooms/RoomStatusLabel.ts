import RoomStatus from './RoomStatus';

const RoomStatusLabel = new Map<RoomStatus, string>([
    [RoomStatus.Started, 'Started'],
    [RoomStatus.Starting, 'Starting'],
    [RoomStatus.Gathering, 'Waiting for players'],
    [RoomStatus.Completed, 'Complete'],
]);

export default RoomStatusLabel;
