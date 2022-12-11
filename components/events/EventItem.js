import Link from "next/link";

import styles from "./EventItem.module.css";

export default function EventItem({ id, title, image, date, location }) {
    // 針對一些資訊做處理才傳出去
    const humanReadableDate = new Date(date).toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // 這邊也是做我們想要的處理
    const formattedAddress = location.replace(", ", "\n");

    // 做成Link比較好理解
    const explorLink = `/events/${id}`;

    return (
        <li className={styles.item}>
            {/* 這邊src是不需要加上public的，因為預設就會抓public路徑的 */}
            <img src={`/${image}`} alt={title} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Link href={explorLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}
