import {Button, list, Select} from "@chakra-ui/react";
import {useEffect, useState} from "react";

export default function BindSelection({onChange}: {onChange: (keycode: number) => void}) {
    const [listening, setListening] = useState(false);

    useEffect(() => {
        if (!listening) {
            return;
        }
        window.addEventListener('keydown', function listener(e) {
            e.preventDefault();
            onChange(e.keyCode);
            setListening(false);
            window.removeEventListener('keydown', listener);
        });
    }, [listening]);

    return (
        <Button onClick={() =>setListening(true)}>{ listening ? 'Listening...' : 'Rebind' }</Button>
    );
}
