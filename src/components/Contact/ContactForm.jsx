

import React, { useState } from 'react';
import { Typography, Stack, Grid, FormControlLabel, Alert, Collapse } from "@mui/material";
import { StyledTextfield, StyledCheckedBox, StyledButton } from '../UI/StyledComponents';
import { useToggle } from '../../utils/useToggle';
import jsonp from 'jsonp';

const initFeedback = {
    'entry.781707531': '',
    'entry.1024643799': ''
};

const baseUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSc1ZlPVPl1xe9nidLKDDpzJ5AbhDGqr_W7BXzoAVbeTC2e4Cg/formResponse`;

export const ContactForm = () => {
    const [feedbackForm, setFeedbackForm] = useState(initFeedback);
    const { isToggle, setIsToggle } = useToggle();

    const togglerHandler = () => setIsToggle(false);
    const unchangeHandler = (e, key) => setFeedbackForm({ ...feedbackForm, [key]: e.target.value });

    const submitForm = (e) => {
        const firstName = `entry.781707531=${feedbackForm['entry.781707531']}`;
        const secondName = `entry.1024643799=${feedbackForm['entry.1024643799']}`;
        const requestUrl = baseUrl + `?${firstName}&${secondName}`;
        jsonp(requestUrl);
        setIsToggle(true);
        setFeedbackForm(initFeedback);
        e.preventDefault();
    };

    return (
        <Stack component='form' maxWidth='80%' spacing={3}>
            <Typography variant="h1" color="common.white" fontWeight={700} fontSize={24} textAlign='center'>
                Feedback
            </Typography>
            <Stack spacing={0.5} height='100%'>
                <Grid container spacing={1} >
                    <Grid xs={12} sm={6} item>
                        <StyledTextfield
                            placeholder="Enter first name"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            onChange={(e) => unchangeHandler(e, 'entry.781707531')}
                            value={feedbackForm['entry.781707531']}
                            name="entry.781707531"
                            required
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <StyledTextfield
                            placeholder="Enter last name"
                            label="Last Name"
                            variant="outlined"
                            onChange={(e) => unchangeHandler(e, 'entry.1024643799')}
                            value={feedbackForm['entry.1024643799']}
                            name="entry.1024643799"
                            fullWidth
                            required
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <StyledTextfield
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                    // required
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextfield
                        type="number"
                        placeholder="Enter phone number"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                    // required
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextfield
                        label="Enter your comment"
                        multiline
                        rows={4}
                        placeholder="Enter your comment"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
            </Stack>
            <Stack spacing={3} direction='column' justifyContent='center' alignItems='center'>
                <FormControlLabel
                    control={<StyledCheckedBox />}
                    label={<Typography sx={{ color: 'white' }}>I agree my submitted data is collected and stored</Typography>}
                />
                <StyledButton type='submit' onClick={submitForm} alignself='center' variant="contained" color="secondary">Submit</StyledButton>
            </Stack>
            <Collapse in={isToggle}>
                <Alert severity="success" onClose={togglerHandler}>
                    We have received your feedback and will reply to you soon!
                </Alert>
            </Collapse>
        </Stack>
    );
};
;
