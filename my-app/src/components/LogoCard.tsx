export default function LogoCard(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={154}
        height={154}
        viewBox="0 0 154 154"
        fill="none"
        {...props}
      >
        <circle
          cx="77"
          cy="77"
          r="75"
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          d="M59 38V116C59 119.314 61.6863 122 65 122H89C92.3137 122 95 119.314 95 116V85"
          stroke="currentColor"
          strokeWidth={8}
        />
        <path
          d="M95 84L77 58L59 84"
          stroke="currentColor"
          strokeWidth={8}
        />
      </svg>
    );
  }
  