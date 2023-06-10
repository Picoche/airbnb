"use client";

// Define an interface in TypeScript to provide a contract for the props that the Container component will receive.
// The interface specifies that there should be a 'children' property of type React.ReactNode.
interface ContainerProps {
  children: React.ReactNode;
}

// Define a functional component in React with TypeScript.
// We specify that the props for this component should match the structure defined in the ContainerProps interface.
// The 'children' prop is destructured from the props argument.
const Container: React.FC<ContainerProps> = ({ children }) => {
  // The component returns a div that contains whatever is passed as 'children' when the component is used.
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

// Export the Container component for use in other parts of the application.
export default Container;
