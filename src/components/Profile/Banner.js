import {Container, Image} from "react-bootstrap";
import styles from "../../assets/css/components/Profile/Banner.module.css";

export const Banner = () => {
    return(
        <Container className={`${styles.container}`}>
            <Image className={`${styles.image}`} src={"https://via.placeholder.com/150"} alt={"profile_image"}/>
        </Container>
    )
}