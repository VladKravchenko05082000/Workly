import NavLink from "@/components/navigate/NavLink";
import { routeConfig } from "@/lib/constants/routeConfig";

export default function NotProperlyColumnIdNotFound() {
  return (
    <div>
      To create todo element return
      <NavLink href={`/${routeConfig.home}`}>to home</NavLink>
      and click Add item
    </div>
  );
}
