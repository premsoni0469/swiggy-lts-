import { useParams } from "react-router";

const Menu = () => {
    const params = useParams();
    console.log("params", params);
    return(
        <>
            This is menu component
        </>
    );
}

export default Menu;