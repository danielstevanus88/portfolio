import { ReactNode } from "react";

interface SubsectionProps {
  title: string;
  children: ReactNode;
}

const Subsection = ({ title, children }: SubsectionProps) => {
  return (
    <div className="mt-12 first:mt-0">
      <h4 className="heading-subsection mb-6 pb-3 border-b border-rule">
        {title}
      </h4>
      <div>{children}</div>
    </div>
  );
};

export default Subsection;
