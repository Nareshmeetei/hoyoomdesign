type StarRatingProps = {
  rating: number;
  starColor?: string;
  filledColor?: string;
  starSize?: number;
};

// Ported from the project's Framer code component (rating.tsx / "Star Rating").
export default function StarRating({
  rating,
  starColor = "rgba(255, 255, 255, 0.5)",
  filledColor = "rgba(255, 255, 255, 0.5)",
  starSize = 24,
}: StarRatingProps) {
  const renderStar = (index: number) => {
    const size = starSize * 0.8;
    const path = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

    if (rating >= index + 1) {
      return (
        <svg key={index} viewBox="0 0 24 24" fill={filledColor} width={size} height={size}>
          <path d={path} />
        </svg>
      );
    }
    if (rating > index && rating < index + 1) {
      return (
        <svg key={index} viewBox="0 0 24 24" width={size} height={size}>
          <defs>
            <linearGradient id={`half-fill-${index}`}>
              <stop offset="50%" stopColor={filledColor} />
              <stop offset="50%" stopColor={starColor} />
            </linearGradient>
          </defs>
          <path fill={`url(#half-fill-${index})`} d={path} />
        </svg>
      );
    }
    return (
      <svg key={index} viewBox="0 0 24 24" fill={starColor} width={size} height={size}>
        <path d={path} />
      </svg>
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {Array.from({ length: 5 }, (_, i) => renderStar(i))}
    </div>
  );
}
