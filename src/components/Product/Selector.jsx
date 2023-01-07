import { Stack, MenuItem, FormControl, InputLabel } from "@mui/material";
import { StyledButton, StyledSelect } from '../UI/StyledComponents';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Products from "../../asset/productList.json";


const TAGS = [
    { category: 'All' },
    { category: 'Permanent' },
    { category: 'W/R' },
    { category: 'Seasonal' },
    { category: 'Elabore' },
];

export const Selector = (props) => {
    const { setSelectedProductList } = props;
    const [currentTag, setCurrentTag] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const filteredCategory = searchParams.get('category');


    const tagSelectHandler = (tag) => {
        setCurrentTag(tag);
        if (tag !== 'All') {
            setSelectedProductList(Products.filter((product) => {
                return product.tags.includes(tag) && product.img !== '';
            }));
            setSearchParams({
                category: tag,
            });
        } else {
            setSelectedProductList(Products);
            setSearchParams({
                category: 'All',
            });
        }
    };

    useEffect(() => {
        if (!filteredCategory) {
            setSelectedProductList(Products);
            setCurrentTag('All');
            setSearchParams({ category: 'All' });
        } else if (filteredCategory !== 'All') {
            setSelectedProductList(Products.filter((product) => {
                return product.tags.includes(filteredCategory) && product.img !== '';
            }));
            setCurrentTag(filteredCategory);
        }
    }, [filteredCategory, setSearchParams, setSelectedProductList]);

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
    const { setSelectedProductList } = props;
    const [currentTag, setCurrentTag] = useState('All');
    const [searchParams, setSearchParams] = useSearchParams();
    const filteredCategory = searchParams.get('category');

    const tagSelectHandler = (event) => {
        setCurrentTag(event.target.value);
        if (event.target.value !== 'All') {
            setSelectedProductList(Products.filter((product) => {
                return product.tags.includes(event.target.value) && product.img !== '';
            }));
            setSearchParams({
                category: event.target.value,
            });
        } else {
            setSelectedProductList(Products);
            setSearchParams({
                category: 'All',
            });
        }
    };

    useEffect(() => {
        if (!filteredCategory) {
            setSelectedProductList(Products);
            setCurrentTag('All');
            setSearchParams({ category: 'All' });
        } else if (filteredCategory !== 'All') {
            setSelectedProductList(Products.filter((product) => {
                return product.tags.includes(filteredCategory) && product.img !== '';
            }));
            setCurrentTag(filteredCategory);
        }
    }, [filteredCategory, setSearchParams, setSelectedProductList]);

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
