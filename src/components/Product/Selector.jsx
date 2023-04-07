import { Stack, MenuItem, FormControl, InputLabel } from "@mui/material";
import { StyledButton, StyledSelect } from '../UI/StyledComponents';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";

const TAGS = [
    { category: 'All' },
    { category: 'W/R' },
    { category: 'Permanent' },
    { category: 'Seasonal' },
    { category: 'Elabore' },
];

export const Selector = (props) => {
    const { setProductList, data } = props;
    const [currentTag, setCurrentTag] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const filteredCategory = searchParams.get('category');
    const tagSelectHandler = useCallback((tag) => {
        if (tag === currentTag) {
            return;
        } else {
            setCurrentTag(tag);
            if (tag === 'All') {
                setProductList([]);
                searchParams.set('category', 'All');
            } else {
                setProductList([]);
                searchParams.set('category', tag);
                setSearchParams({ category: tag });
            }
            setSearchParams(searchParams);
        }
    }, [currentTag, searchParams, setProductList, setSearchParams]);

    useEffect(() => {
        if (!filteredCategory) {
            searchParams.set('category', 'All');
            setProductList(data);
            setCurrentTag('All');
        } else if (filteredCategory === 'All') {
            setCurrentTag('All');
            setProductList(data);
        } else if (filteredCategory !== 'All') {
            setProductList(data.filter((product) => product.tags.includes(filteredCategory)));
            setCurrentTag(filteredCategory);
        }
        setSearchParams(searchParams);
    }, [filteredCategory, setSearchParams, setProductList, data, searchParams]);

    return (
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={3} my={5}>
            {TAGS.map((tag) => (
                <StyledButton
                    onClick={() => tagSelectHandler(tag.category)}
                    key={tag.category}
                    variant={currentTag === tag.category ? 'contained' : 'outlined'}
                    color="secondary"
                >{tag.category}</StyledButton>
            ))}
        </Stack>
    );
};

export const MobileSelector = (props) => {
    const { setProductList, data } = props;
    const [currentTag, setCurrentTag] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const filteredCategory = searchParams.get('category');


    const tagSelectHandler = useCallback((event) => {
        if (event.target.value === currentTag) {
            return;
        } else {
            setCurrentTag(event.target.value);
            if (event.target.value === 'All') {
                setProductList([]);
                searchParams.set('category', 'All');
            } else {
                setProductList([]);
                searchParams.set('category', event.target.value);
            }
            setSearchParams(searchParams);
        }
    }, [currentTag, searchParams, setProductList, setSearchParams]);

    useEffect(() => {
        if (!filteredCategory) {
            searchParams.set('category', 'All');
            setProductList(data);
            setCurrentTag('All');
        } else if (filteredCategory === 'All') {
            setCurrentTag('All');
            setProductList(data);
        } else if (filteredCategory !== 'All') {
            setProductList(data.filter((product) => product.tags.includes(filteredCategory)));
            setCurrentTag(filteredCategory);
        }
        setSearchParams(searchParams);
    }, [filteredCategory, setSearchParams, setProductList, data, searchParams]);

    return (
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={3} my={5}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel labelid="category-selector">Category</InputLabel>
                <StyledSelect
                    labelid="category-selector"
                    id="category-selector"
                    value={currentTag}
                    label="Category"
                    onChange={tagSelectHandler}
                    autoWidth
                    variant="outlined"
                >
                    {TAGS.map((tag) => (
                        <MenuItem
                            key={tag.category}
                            value={tag.category}
                        >{tag.category}
                        </MenuItem>
                    ))}
                </StyledSelect>
            </FormControl>
        </Stack>
    );
};
