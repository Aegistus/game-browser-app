import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useState } from 'react';
import '../assets/main.css'

function ListGroup()
{
    const [selectedIndex, setSelectedIndex] = useState(0);
    let items =
    [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris"
    ];

    if (items.length == 0)
    {
        return <p>No item found</p>;
    }
    return(
        <List className="List">
            { items.map((item, index) => (
                <ListItem 
                    className={selectedIndex === index ? 'ListItemActive' : 'ListItem'} 
                    key={item}
                    onClick={() => {setSelectedIndex(index);}}
                >
                    <h1>{item}</h1>
                </ListItem>) )}
        </List>
    ); 
}
export default ListGroup;