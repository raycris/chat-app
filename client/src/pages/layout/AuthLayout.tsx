import { Outlet } from "react-router-dom";
import FullScreenCard from "../../components/FullScreenCard";

const Authlayout = () => {
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BelowCard>klk Hi</FullScreenCard.BelowCard>
    </FullScreenCard>
  );
};

export default Authlayout;
