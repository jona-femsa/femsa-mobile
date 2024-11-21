interface ListProps<T> {
    items: T[];
    filteredItems?: (item: T) => boolean;
}

// vuelve 'items' como solo de lectura
type ListConfig<T> = {
    [P in keyof T]: P extends 'items' ? Readonly<T[P]> : T[P];
}

export default function List<T>({ items, filteredItems }: ListConfig<ListProps<T>>): JSX.Element {
    // válida que filteredItems venga definido, sino no filtra 
    const filteredList = filteredItems ? items.filter(filteredItems) : items;

    return (
        <ul>
            {filteredList.map((item, index) => (
                <li key={index}>
                    { JSON.stringify(item) }
                </li>
            ))}
        </ul>
    );
}
