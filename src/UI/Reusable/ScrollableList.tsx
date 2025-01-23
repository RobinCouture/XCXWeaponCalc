import React from 'react';

interface ScrollableListProps {
    children: React.ReactNode;
    height: string;
}

class ScrollableList extends React.Component<ScrollableListProps> {
    render() {
        const { height } = this.props;
        return (
            <ul style={{ overflowY: 'scroll', height }}>
                {this.props.children}
            </ul>
        );
    }
}

export default ScrollableList;