import React, {ReactNode, FC} from "react";

interface IComposeContext{
  components?: FC<{children: ReactNode}>[],
  children?: ReactNode | undefined;

}

const ComposeContext = (props: IComposeContext) => {
  const {components = [], children} = props;

  return (
    <>
      { components.reduceRight((accumulator, Component: any)=>{
        return <Component>{accumulator}</Component>
      }, children)};
    </>
  ) 
};

export default ComposeContext;

