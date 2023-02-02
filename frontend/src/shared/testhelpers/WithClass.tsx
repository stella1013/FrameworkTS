import React, { Component, ComponentType } from 'react';

const withClass = <T extends object>(WrappedComponent: ComponentType<T>, className: string):
    React.FunctionComponent<T> =>
        (props: T) => {
            console.log(props);
            return (
                <div className={className}>
                    <WrappedComponent {...props} />
                </div>
            );
        }

export default withClass;