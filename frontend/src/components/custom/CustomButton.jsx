'use client';

import { Button } from 'antd';

export default function CustomButton(props) {
    const { title, className, type, shape } = props;

    return (
        <Button type={type} className={className} shape={shape}>
            {title}
        </Button>
    );
}