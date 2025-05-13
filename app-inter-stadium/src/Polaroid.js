// Componente Polaroid singolo
const Polaroid = ({ photo, date, event, result, scorers }) => {
  return (
    <div className="flex flex-col bg-white p-3 shadow-lg w-64 transform transition-transform duration-300 hover:rotate-1 hover:scale-105">
      {/* Area foto */}
      <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
        {photo ? (
          <img src={photo} alt={event} className="max-h-full max-w-full" />
        ) : (
          <img src="/api/placeholder/240/200" alt="placeholder" className="max-h-full max-w-full opacity-50" />
        )}
      </div>
      
      {/* Informazioni evento */}
      <div className="px-2 font-handwriting">
        <div className="text-gray-500 text-sm mb-1">{date}</div>
        <div className="font-bold text-lg mb-1">{event}</div>
        <div className="text-xl font-semibold mb-1">{result}</div>
        <div className="text-sm text-gray-700 italic">{scorers}</div>
      </div>
    </div>
  );
};