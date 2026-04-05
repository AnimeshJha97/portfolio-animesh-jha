import React, { ReactNode } from "react";

interface CodeSectionProps {
  tag: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

const CodeSection = ({
  tag,
  children,
  className,
  innerClassName,
}: CodeSectionProps) => {
  return (
    <div className={className}>
      <p className="text-xs md:text-sm text-primary">{`<${tag}>`}</p>
      <div className={innerClassName}>{children}</div>
      <p className="text-xs md:text-sm text-primary">{`</${tag}>`}</p>
    </div>
  );
};

export default CodeSection;
