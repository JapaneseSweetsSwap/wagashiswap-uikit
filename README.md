# WagashiSwap UIkit

[![Version](https://img.shields.io/npm/v/@wagashiswap/uikit)](https://www.npmjs.com/package/@wagashiswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@wagashiswap/uikit)](https://www.npmjs.com/package/@wagashiswap/uikit)

WagashiSwap UIkit is a set of React components and hooks used to build pages on WagashiSwap's apps.

It also contains a theme file for dark and light mode.

## Install

`yarn add @wagashiswap/uikit`

## npm

https://www.npmjs.com/package/@wagashiswap/uikit

## Setup

### Theme

Before using WagashiSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@wagashiswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@wagashiswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://wagashiswap.github.io/wagashiswap-uikit/)
