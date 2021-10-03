import Link, { LinkProps } from '@mui/material/Link';
import { Link as LinkRouter } from 'react-router-dom';
interface RouterLinkProps {
    to: string;
    replace?: boolean;
    children?: any;
}

const RouterLink = (props: RouterLinkProps) => {
    return <Link { ...props } component = {LinkRouter as any} />
}

export default RouterLink;