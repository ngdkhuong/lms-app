import { Input } from 'antd';

export default function CustomInput(props) {
    const { placeholder, prefix, className } = props;

    return <Input size="large" placeholder={placeholder} prefix={prefix} className={className} />;
}