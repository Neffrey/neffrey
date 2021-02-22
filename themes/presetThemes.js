export const presetThemes = {
    defaultTheme: {
        Title: 'Default Theme',
        darkMode: true,
        overWrites: {
            palette: {
                primary: {
                    main: '#16AFD3',
                    light: '#6BCCE3',
                    dark: '#026B84',
                },
                secondary: {
                    main: '#EC1279',
                    light: '#F36FAD',
                    dark: '#B20054',
                },
                tertiary: {
                    main: '#FFDD14',
                    light: '#FFED80',
                    dark: '#FFDA00',
                    contrastText: '#000',
                },
            },
            typography: {
                h1: {
                    fontSize:'5rem',
                    fontWeight:900,
                    textTransform: 'lowercase',
                    letterSpacing:4,
                    fontFamily:'Big Shoulders Display'
                },
                h2: {
                    fontSize:'2.8rem',
                    fontWeight:700,
                    textTransform: 'lowercase',
                    letterSpacing:2,
                    fontFamily:'Big Shoulders Display'
                },
                h3: {
                    fontSize:'2rem',
                    fontWeight:500,
                    textTransform: 'lowercase',
                },
                h4: {
                    textTransform: 'lowercase',
                },
                h5: {
                    textTransform: 'lowercase',
                },
                h6: {
                    textTransform: 'lowercase',
                }
            },
        },
    },
}
