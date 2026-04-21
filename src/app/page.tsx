import NavLink from "@/components/navigate/NavLink";

import { routeConfig } from "@/lib/constants/routeConfig";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="bg-bg-surface2">
      <NavLink href={`/${routeConfig.home}`}>To home</NavLink>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}
