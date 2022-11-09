import "bootstrap/dist/css/bootstrap.css";
import "./styles/all.css";
import "animate.css";
import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import i18n from './i18n/i18n';
import { ThemeProvider } from '@emotion/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from "react-router-dom";
import { theme } from './styles/themeOptions';
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={'loading'}>
            <I18nextProvider i18n={i18n}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </I18nextProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById("root")
);
