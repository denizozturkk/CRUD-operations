import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";


interface Props 
{
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroups(props: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No Element Found</p>}
      <ul className="list-group">
        {props.items.map((item, i) => (
          <li className={selectedIndex === i ? "list-group-item active" : "list-group-item"} key={item}
           onClick = {() => {
            setSelectedIndex(i);
            props.onSelectItem(item)
          }} >{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroups;
