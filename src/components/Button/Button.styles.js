import styled from "styled-components"
import { Button } from "antd"

export default styled(Button)`
	&.quuack-button {
		font-family: ${props => props.theme.fontBase};
		border: 0;
		border-radius: 3em;
		cursor: pointer;
		display: inline-block;
		line-height: 1;
	}
	&.quuack-button--primary {
		background-color: ${props => props.theme.colorPrimary};
		color: ${props => props.theme.textInverseColor};
	}
	&.quuack-button--secondary {
		color: ${props => props.theme.colorSecondary};
		background-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
	}
	&.quuack-button--small {
		font-size: 12px;
		padding: 10px 16px;
	}
	&.quuack-button--medium {
		font-size: 14px;
		padding: 11px 20px;
	}
	&.quuack-button--large {
		font-size: 16px;
		padding: 12px 24px;
	}
`