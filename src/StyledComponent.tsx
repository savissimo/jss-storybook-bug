import React from 'react';
import withStyles, { WithStylesProps } from 'react-jss';

const styles = (theme: any) => ({
	root: {},
});

interface Props extends WithStylesProps<typeof styles> {
	className?: string,
}

interface State {
}

class StyledComponent extends React.Component<Props, State> {
	render() {
		const { classes, className } = this.props;
		return (
			<div className={classes.root}>
			</div>
		);
	}
};

export default withStyles(styles)(StyledComponent);
