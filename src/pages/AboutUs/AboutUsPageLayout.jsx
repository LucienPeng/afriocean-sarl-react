import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


const AboutPageLayout = () => {
    return (
        <Box minHeight='100vh'>
            <Outlet />
        </Box>
    );
};

export default AboutPageLayout;
