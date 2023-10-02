'use client';

import styled from '@emotion/styled';

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        margin-left: 0.5rem;
    }

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }
`;

export const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 0 0 1rem;
    line-height: 1.15;
    font-size: 3.6rem;
    text-align: center;

    & a {
        color: #0070f3;
        text-decoration: none;
    }

    & a:hover,
    & a:focus,
    & a:active {
        text-decoration: underline;
    }
`;

export const Description = styled.p`
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
`;

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;
    margin-top: 3rem;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const Card = styled.a`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition:
        color 0.15s ease,
        border-color 0.15s ease;

    &:hover,
    &:focus,
    &:active {
        color: #0070f3;
        border-color: #0070f3;
    }

    & h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    & p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
`;

export const Logo = styled.img`
    height: 1em;
`;
