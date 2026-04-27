import IconWrapper from "@/components/icon-wrapper/IconWrapper";

export function EyeOpenIcon({ size }: { size?: number | string }) {
  return (
    <IconWrapper viewBox="0 0 24 24" size={size} fill="none">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </IconWrapper>
  );
}
