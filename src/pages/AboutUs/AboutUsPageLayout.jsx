import { Box } from "@mui/material";
import { Banner } from '../../components/UI/Banner';
import { Outlet } from "react-router-dom";


const AboutPageLayout = () => {
    return (
        <Box minHeight='100vh'>
            <Banner />
            <Outlet />
        </Box>
    );
};

export default AboutPageLayout;
