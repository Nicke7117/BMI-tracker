export const Bmi = ({ bmiData }) => {
  function bmiLevel() {
    const bmi = bmiData.bmi;
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      return "Normal";
    } else if (25 <= bmi && bmi <= 29.9) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    }
  }
  return (
    <div>
      <div className="border-2 border-blue-400 h-5/6 m-auto rounded-xl w-5/6 relative mt-2 mb-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute right-1 top-1"
          viewBox="0 0 20 20"
          fill="red"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-center text-xl mt-1">{bmiData.date}</p>
        <p className="text-center text-base">
          Bmi: {bmiData.bmi.toFixed(1)} - {bmiLevel()}
        </p>
        <p className="text-center">Weight: {bmiData.weight} kg</p>
        <p className="text-center">Height: {bmiData.height} cm</p>
      </div>
    </div>
  );
};
