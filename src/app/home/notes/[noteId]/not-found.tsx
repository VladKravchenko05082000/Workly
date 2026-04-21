import NavLink from "@/components/navigate/NavLink";
import { routeConfig } from "@/lib/constants/routeConfig";

export default function NotProperlyColumnIdNotFound() {
  return (
    <div>
      This note doesnt exist
      <NavLink href={`/${routeConfig.notes}`}>Back to Notes</NavLink>
    </div>
  );
}
