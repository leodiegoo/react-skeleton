import React, { Component } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'


class LiNavLink extends Component {
    render() {
        const { to, exact, activeClassName, className, isActive: getIsActive, ...rest } = this.props;
        return (
            <Route
                path={typeof to === 'object' ? to.pathname : to}
                exact={exact}
                children={({ location, match }) => {
                    const isActive = !!(getIsActive ? getIsActive(match, location) : match)

                    return (
                        <li
                            className={isActive ? [activeClassName, className].join(' ') : className}>
                            <Link
                                to={to}
                                {...rest}
                            />
                        </li>
                    )
                }}
            />
        );
    }
}

export default LiNavLink;