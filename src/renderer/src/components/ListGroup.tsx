import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useState } from 'react';
import '../assets/main.css'

interface Props
{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props)
{
    const [selectedIndex, setSelectedIndex] = useState(0);
    if (items.length == 0)
    {
        return <p>No item found</p>;
    }
    return(
        <List className="List">
            <h1>{heading}</h1>
            { items.map((item, index) => (
                <ListItem 
                    className={selectedIndex === index ? 'ListItemActive' : 'ListItem'} 
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item)
                    }}
                >
                    <h1>{item}</h1>
                </ListItem>) )}
        </List>
    ); 
}
export default ListGroup;