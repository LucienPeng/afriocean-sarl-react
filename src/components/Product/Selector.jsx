import { Stack, MenuItem, FormControl, InputLabel } from "@mui/material";
import { StyledButton, StyledSelect } from '../UI/StyledComponents';
import { useSearchParams } from "react-router-dom";
import { useEffect, useCallback, useState } from "react";
import { useProductPageTranslation } from "../../i18n/useTranslations";

const useTags = () => {
    const { t } = useProductPageTranslation();
    const TAGS = [
        { category: t('all'), id: 'All' },
        { category: t('w/r'), id: 'W/R' },
        { category: t('permanent'), id: 'Permanent' },
        { category: t('seasonal'), id: 'Seasonal' },
        { category: t('elaborate'), id: 'Elaborate' },
    ];
    return { TAGS };
};

export const Selector = (props) => {
    const { setProductList, data } = props;
    const { TAGS } = useTags();
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
                    onClick={() => tagSelectHandler(tag.id)}
                    key={tag.id}
                    variant={currentTag === tag.id ? 'contained' : 'outlined'}
                    color="secondary"
                >{tag.category}</StyledButton>
            ))}
        </Stack>
    );
};

export const MobileSelector = (props) => {
    const { t } = useProductPageTranslation();
    const { setProductList, data } = props;
    const { TAGS } = useTags();
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
                <InputLabel labelid="category-selector">{t('category')}</InputLabel>
                <StyledSelect
                    labelid="category-selector"
                    id="category-selector"
                    value={currentTag}
                    label={'category'}
                    onChange={tagSelectHandler}
                    autoWidth
                    variant="outlined"
                >
                    {TAGS.map((tag) => (
                        <MenuItem
                            key={tag.id}
                            value={tag.id}
                        >
                            {tag.category}
                        </MenuItem>
                    ))}
                </StyledSelect>
            </FormControl>
        </Stack>
    );
};
