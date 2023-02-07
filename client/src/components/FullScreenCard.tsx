import { ReactNode } from "react";

type FullScreenCardProps = {
  children: ReactNode;
};

const FullScreenCard = (props: FullScreenCardProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full">{props.children}</div>
    </div>
  );
};

FullScreenCard.Body = function (props: FullScreenCardProps) {
  return <div className="shadow bg-white p-6 rounded-lg">{props.children}</div>;
};

FullScreenCard.BelowCard = function (props: FullScreenCardProps) {
  return <div className="mt-2 justify-center flex gap-3">{props.children}</div>;
};

export default FullScreenCard;
