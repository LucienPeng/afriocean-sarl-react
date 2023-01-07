import { Stack } from "@mui/material";
import { StyledButton } from '../UI/StyledComponents';
import Products from "../../asset/productList.json";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

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
        if (filteredCategory !== 'All') {
            setSelectedProductList(Products.filter((product) => {
                return product.tags.includes(filteredCategory) && product.img !== '';
            }));
            setCurrentTag(filteredCategory);
        } else {
            setSelectedProductList(Products);
            setCurrentTag('All');
            setSearchParams({
                category: 'All',
            });
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
