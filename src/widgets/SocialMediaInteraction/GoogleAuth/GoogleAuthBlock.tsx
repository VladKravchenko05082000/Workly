import { GoogleAuthIcon } from "@/components/icons/GoogleAuthIcon";
import { Button } from "@/components/ui/button";

export default function GoogleAuthBlock() {
  return (
    <>
      <div className="flex w-full items-center gap-3">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-md text-white/40">or continue with</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <Button variant="secondary" size="lg" className="w-full">
        <GoogleAuthIcon /> Continue with Google
      </Button>
    </>
  );
}
