enum Hotkey {
    LineFormation,
    SpreadFormation,
    SplitFormation,

    Patrol,
    AttackGround,

    Stop,
    DeleteUnit,

    CameraUp,
    CameraDown,
    CameraLeft,
    CameraRight,
}

export const labels: {[key in Hotkey]: string} = {
    [Hotkey.LineFormation]: 'Line formation',
    [Hotkey.SpreadFormation]: 'Spread formation',
    [Hotkey.SplitFormation]: 'Split formation',
    [Hotkey.Patrol]: 'Patrol',
    [Hotkey.AttackGround]: 'Attack ground',
    [Hotkey.Stop]: 'Stop',
    [Hotkey.DeleteUnit]: 'Delete unit',
    [Hotkey.CameraUp]: 'Pan up',
    [Hotkey.CameraDown]: 'Pan down',
    [Hotkey.CameraLeft]: 'Pan left',
    [Hotkey.CameraRight]: 'Pan right',
};

export default Hotkey;
