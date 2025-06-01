type StatCardProps = {
  value: string;
  label: string;
  color: string;
};

const StatCard = ({ value, label, color }: StatCardProps) => (
  <div className="bg-gradient-to-br p-0.5 rounded-xl group">
    <div className="bg-white p-4 rounded-xl text-center transition-all group-hover:bg-opacity-0">
      <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
        {value}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  </div>
);

export default StatCard; 