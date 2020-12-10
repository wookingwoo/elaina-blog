import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { theme } from 'src/resources/theme';
import { ThemeMode } from 'src/redux/common/type';

export const GlobalStyles = createGlobalStyle<{ themeMode: ThemeMode }>`
	${reset};
	a {
		text-decoration: none;
		color: inherit;
	}
	* {
		box-sizing: border-box;
	}
	body {
    background-color: ${(props) => theme[props.themeMode].backgroundColor};
    color: ${(props) => theme[props.themeMode].textColor};
		line-height: 1.4;
		font-family: 'Nanum Gothic', sans-serif
	}
`;
