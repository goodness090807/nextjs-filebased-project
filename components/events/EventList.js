import EventItem from "./EventItem";
import styles from "./EventList.module.css";

export default function EventList({ items }) {
    const itemComponent = items.map((item) => {
        return (
            <EventItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                date={item.date}
                location={item.location}
            />
        );
    });

    return <ul className={styles.list}>{itemComponent}</ul>;
}
