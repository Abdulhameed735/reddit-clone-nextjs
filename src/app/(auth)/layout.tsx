const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex py-4 justify-center items-center h-full w-full m-auto overflow-y-scroll">
      {children}
    </div>
  );
};

export default AuthLayout;
