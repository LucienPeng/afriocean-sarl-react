import { Button, TextField, Checkbox } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)({
    fontFamily: '\'Copperplate\',\'Roboto\', \'normal\'',
    fontWeight: 700,
    fontSize: 16
});

export const StyledTextfield = styled(TextField)({

    '.MuiInputBase-root': {
        backgroundColor: 'white'
    }

});

export const StyledCheckedBox = styled(Checkbox)({
    color: 'white',
    '&:hover': {
        color: 'white',
    }
});
