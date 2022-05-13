import {useEffect, useState} from "react";

export default function useFetched<T>(url: string, defaultValue: T): T {
    const [data, setData] = useState<T>(defaultValue);
    useEffect(() => {
        (async function () {
            const data = await fetch(url).then(response => response.json());
            setData(data);
        })();
    }, []);
    return data;
}
