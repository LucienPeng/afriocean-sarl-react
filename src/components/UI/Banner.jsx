import { Box } from "@mui/material";
import bannerUrl from '../../asset/images/banner.jpg';

export const Banner = () => {

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '30vh',
                backgroundImage: `url(${bannerUrl})`,
                backgroundSize: 'cover',
                backgroundRepeated: false,
                backgroundPosition: 'center',
            }}
            component='img'
        />
    );
};
