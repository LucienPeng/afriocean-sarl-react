import { Button, TextField, Checkbox, Select } from "@mui/material";
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
});

export const StyledSelect = styled(Select)(() => ({
    width: 300,
    "&.MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#097272"
        },
        "&:hover fieldset": {
            borderColor: "#3EB6B6"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#3EB6B6"
        }
    }
}));
