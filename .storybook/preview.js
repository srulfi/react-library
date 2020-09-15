import React from "react"
import { ThemeProvider } from "styled-components"

import quuackTheme from "./quuackTheme"
import { GlobalStyle } from "../src/shared/global"

export const decorators = [
	Story => (
		<ThemeProvider theme={quuackTheme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
]

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	a11y: {
		element: "#root",
		manual: false,
	},
	docs: {
		theme: quuackTheme,
	},
}
