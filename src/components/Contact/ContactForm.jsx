

import React, { useEffect } from 'react';
import { Typography, Stack, Grid, FormControlLabel, Alert, Collapse } from "@mui/material";
import { StyledTextfield, StyledCheckedBox, StyledButton } from '../UI/StyledComponents';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToggle } from '../../utils/useToggle';
import { useForm, Controller } from "react-hook-form";
import jsonp from 'jsonp';
import * as yup from "yup";

const initFeedback = {
    '1074437902': '',
    '88869021': '',
    '166946023': '',
    '2113753156': '',
    '1917497005': '',
    isAgreed: false
};

const schema = yup.object({
    '1074437902': yup.string().required(),
    '88869021': yup.string().required(),
    '166946023': yup.string().email().required(),
    '2113753156': yup.number().required(),
    '1917497005': yup.string().required(),
    isAgreed: yup.boolean().required().isTrue(),
}).required();

const baseUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSedP6Jw7b-KhqLZS6myoq5nSEPAyeHOYY6gPsMW5exHsr3a3w/formResponse`;

export const ContactForm = () => {
    const { isToggle, setIsToggle } = useToggle();
    const { handleSubmit, control, reset, formState: { isDirty, errors }, getValues,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: initFeedback
    });
    const togglerHandler = () => setIsToggle(false);

    const submitForm = (data) => {
        const firstName = `entry.1074437902=${data['1074437902']}`;
        const lastName = `entry.88869021=${data['88869021']}`;
        const email = `entry.166946023=${data['166946023']}`;
        const phone = `entry.2113753156=${data['2113753156']}`;
        const comment = `entry.1917497005=${data['1917497005']}`;
        const requestUrl = baseUrl + `?${firstName}&${lastName}&${email}&${phone}&${comment}`;
        jsonp(requestUrl);
        setIsToggle(true);
        reset(initFeedback);
    };

    console.log(getValues());

    useEffect(() => {
        if (isDirty) {
            setIsToggle(false);
        }
    }, [isDirty, setIsToggle]);

    return (
        <Stack component='form' maxWidth='80%' spacing={3} onSubmit={handleSubmit(submitForm)}>
            <Typography variant="h1" lineHeight={0} color="common.white" fontWeight={700} fontSize={24} textAlign='center'>
                Feedback
            </Typography>
            <Typography variant="body1" color="common.white" textAlign='left' textTransform='none'>
                For any customized requirements or requests, please fill in the contact form.
            </Typography>
            <Stack spacing={0.5} height='100%'>
                <Grid container spacing={1} >
                    <Grid xs={12} sm={6} item>
                        <Controller
                            name="1074437902"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <StyledTextfield {...field}
                                    placeholder="Enter first name"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <Controller
                            name="88869021"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <StyledTextfield {...field}
                                    placeholder="Enter last name"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="166946023"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <StyledTextfield {...field}
                                type="email"
                                placeholder="Enter email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                required
                            />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="2113753156"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <StyledTextfield {...field}
                                type="number"
                                placeholder="Enter phone number"
                                label="Phone"
                                variant="outlined"
                                fullWidth
                                required
                            />}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="1917497005"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <StyledTextfield {...field}
                                label="Enter your comment"
                                multiline
                                rows={4}
                                placeholder="Enter your comment"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        }
                    />
                </Grid>
            </Stack>
            <Stack spacing={3} direction='column' justifyContent='center' alignItems='center'>
                <Controller
                    name="isAgreed"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) =>
                        <FormControlLabel
                            {...field}
                            control={<StyledCheckedBox checked={field.value} sx={{ color: errors.isAgreed ? 'error.main' : '#fff', '&.Mui-checked': { color: '#fff' } }} />}
                            label={<Typography sx={{ color: errors.isAgreed ? 'error.main' : '#fff' }}>I agree my submitted data is collected and stored.</Typography>}
                        />
                    }
                />
                <StyledButton type='submit' alignself='center' variant="contained" color="secondary">Submit</StyledButton>
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
