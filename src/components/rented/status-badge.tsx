const StatusBadge = ({
  status,
}: {
  status: "pending" | "approved" | "cancelled" | "in_progress" | "completed";
}) => {
  const statusColor = {
    pending: "bg-yellow-600",
    approved: "bg-green-600",
    cancelled: "bg-red-600",
    in_progress: "bg-blue-600",
    completed: "bg-gray-600",
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-white text-sm ${
        statusColor[status] as string
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;