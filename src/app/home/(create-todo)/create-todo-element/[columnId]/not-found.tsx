import NavLink from "@/components/navigate/NavLink";
import { routeConfig } from "@/lib/constants/routeConfig";

export default function NotProperlyColumnIdNotFound() {
  return (
    <div>
      Column for this todo element doesn`t exsist
      <NavLink href={`/${routeConfig.home}`}>back to home</NavLink>
    </div>
  );
}
