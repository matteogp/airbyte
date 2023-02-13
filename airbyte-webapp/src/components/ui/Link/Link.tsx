import { PropsWithChildren } from "react";
// eslint-disable-next-line no-restricted-imports
import { Link as ReactRouterLink, To } from "react-router-dom";

import { getLinkClassNames } from "./getLinkClassNames";

export interface LinkProps {
  className?: string;
  opensInNewTab?: boolean;
  variant?: "default" | "primary";
}

interface InternalLinkProps extends LinkProps {
  to: To;
}

export const Link: React.FC<PropsWithChildren<InternalLinkProps>> = ({
  children,
  className,
  to,
  opensInNewTab = false,
  variant = "default",
  ...props
}) => {
  return (
    <ReactRouterLink
      {...props}
      className={getLinkClassNames({ className, variant })}
      rel={opensInNewTab ? "noopener noreferrer" : undefined}
      target={opensInNewTab ? "_blank" : "_self"}
      to={to}
    >
      {children}
    </ReactRouterLink>
  );
};
