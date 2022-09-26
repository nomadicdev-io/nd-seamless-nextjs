import styles from "../styles/Home.module.scss";

export default function Container({children}) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}
