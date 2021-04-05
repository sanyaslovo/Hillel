import { useEffect, useState } from 'react';
import { getItems } from '../services';

export function useDataBase(url) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems(url).then(({ data }) => {
            setItems(data);
        })
    }, [url])
    return { items, getItems }
}