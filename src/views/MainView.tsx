
import Button from "@mui/material/Button";
import { FC } from "react";

interface MainViewProps {

}

const MainView : FC<MainViewProps> = () => {
    const handleClick = () => {
        console.log('this is a main view page')
    }
    return (
        <>
        <Button variant='contained' onClick={()=>handleClick()}>Hello World</Button>
        </>
    )
}

export default MainView;