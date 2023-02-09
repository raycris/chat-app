import { LinkProps, Link as RouterLink } from "react-router-dom";

const Link = ({ children, className, ...rest }: LinkProps) => {
  return (
    <RouterLink {...rest} className={`text-blue-500 underline ${className}`}>
      {children}
    </RouterLink>
  );
};

export default Link;
