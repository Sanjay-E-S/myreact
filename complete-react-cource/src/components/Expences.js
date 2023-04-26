import React from "react";
import ExpenceItem from "./ExpenceItem";
import Card from "./Card";

const Expences = (props) => {
    return (
        <Card>
            <ExpenceItem
                title={props.items[0].title}
                date={props.items[0].date}
                rate={props.items[0].rate}
            ></ExpenceItem>
            <ExpenceItem
                title={props.items[1].title}
                date={props.items[1].date}
                rate={props.items[1].rate}
            ></ExpenceItem>
            <ExpenceItem
                title={props.items[2].title}
                date={props.items[2].date}
                rate={props.items[2].rate}
            ></ExpenceItem>
            <ExpenceItem
                title={props.items[3].title}
                date={props.items[3].date}
                rate={props.items[3].rate}
            ></ExpenceItem>
        </Card >
    );
}

export default Expences;