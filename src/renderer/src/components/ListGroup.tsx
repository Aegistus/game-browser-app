import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

function ListGroup()
{
    const items =
    [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris"
    ];

    
    return(
        <List>
            { items.map(item => <ListItem key={item}><h1>{item}</h1></ListItem>) }
        </List>
    ); 
}
export default ListGroup;