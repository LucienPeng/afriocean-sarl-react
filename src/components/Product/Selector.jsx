import { Stack, MenuItem, FormControl, InputLabel } from "@mui/material";
import { StyledButton, StyledSelect } from '../UI/StyledComponents';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductList } from "../../asset/productList";
import { useCallback } from "react";

const TAGS = [
    { category: 'All' },
    { category: 'W/R' },
    { category: 'Permanent' },
    { category: 'Seasonal' },
    { category: 'Elabore' },
];

export const Selector = (props) => {
    const { setProductList } = props;
    const { PRODUCTS } = useProductList();
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
                setSearchParams({ category: 'All' });
            } else {
                setProductList([]);
                setSearchParams({ category: tag });
            }
        }
    }, [currentTag, setProductList, setSearchParams]);

    useEffect(() => {
        if (!filteredCategory) {
            setProductList(PRODUCTS);

        } else if (filteredCategory === 'All') {
            setCurrentTag('All');
            setSearchParams({ category: 'All' });
            setProductList(PRODUCTS);

        } else if (filteredCategory !== 'All') {

            setProductList(PRODUCTS.filter((product) => product.tags.includes(filteredCategory)));
            setCurrentTag(filteredCategory);
        }
    }, [filteredCategory, setSearchParams, setProductList, PRODUCTS]);

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
    const { setProductList } = props;
    const { PRODUCTS } = useProductList();
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
                setSearchParams({ category: 'All' });
            } else {
                setProductList([]);
                setSearchParams({ category: event.target.value });
            }
        }
    }, [currentTag, setProductList, setSearchParams]);

    useEffect(() => {
        if (!filteredCategory) {
            setProductList(PRODUCTS);

        } else if (filteredCategory === 'All') {
            setCurrentTag('All');
            setSearchParams({ category: 'All' });
            setProductList(PRODUCTS);

        } else if (filteredCategory !== 'All') {

            setProductList(PRODUCTS.filter((product) => product.tags.includes(filteredCategory)));
            setCurrentTag(filteredCategory);
        }
    }, [filteredCategory, setSearchParams, setProductList, PRODUCTS]);

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
