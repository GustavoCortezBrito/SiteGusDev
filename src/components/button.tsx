import Link from "next/link";

interface ButtonProps {
  title: string;
  link: string;
  isEnhanced?: boolean;
}

export default function Button({ title, link, isEnhanced = false }: ButtonProps) {
  return (
    <Link href={link}>
      {isEnhanced ? (
        <div className="flex items-center gap-2 text-white px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition duration-300 hover:scale-95">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h16v16H4V4zm0 0l8 8 8-8"
            />
            </svg>
          {title}
        </div>
      ) : (
        <div className="px-4 py-2 text-white border-b-2 border-transparent hover:border-white transition-all duration-500">
          {title}
        </div>
      )}
    </Link>
  );
}
