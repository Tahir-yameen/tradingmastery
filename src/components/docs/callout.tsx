import {
  AlertCircle,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

interface Props {
  type:
    | "info"
    | "success"
    | "warning";
  children: React.ReactNode;
}

export default function Callout({
  type,
  children,
}: Props) {
  const styles = {
    info: "border-blue-500",
    success: "border-green-500",
    warning: "border-yellow-500",
  };

  const icons = {
    info: <AlertCircle />,
    success: <CheckCircle />,
    warning: <AlertTriangle />,
  };

  return (
    <div
      className={`
        my-6
        flex
        gap-4
        border-l-4
        p-4
        rounded-md
        ${styles[type]}
      `}
    >
      {icons[type]}

      <div>{children}</div>
    </div>
  );
}
