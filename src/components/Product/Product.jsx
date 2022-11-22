import { Box, Typography } from '@mui/material';
import React from 'react';

export const ProductItem = (props) => {
    const { item } = props;

    return (
        <Box height='100vh'>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-body d-flex justify-content-center align-items-center flex-column">
                        <img
                            className="img-fluid animate__animated animate__rubberBand"
                            src={item.img}
                            alt=""
                        />
                        <div className="modal-text col-9">
                            <h3 className="modal-title" id="staticBackdropLabel">
                                {item.id}
                            </h3>
                            <h5>{item.scientificName}</h5>
                            <p>
                                En: {item.En}
                                <br />
                                Sn: {item.Sn}
                            </p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Box >
    );
}

