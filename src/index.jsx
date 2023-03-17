import "./styles/all.css";
import "animate.css";
import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import i18n from './i18n/i18n';
import App from "./App";
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from './components/ScrollToTop';
import { theme } from './styles/themeOptions';




ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<CircularProgress />}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <ScrollToTop />
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </I18nextProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById("root")
);
