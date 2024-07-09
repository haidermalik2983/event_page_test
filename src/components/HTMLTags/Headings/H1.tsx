const H1 = ({ text, weight, textSize  }: { text: string, weight: string, textSize: string }) => {
  return <h1 className={`font-${weight} text-${textSize}`}>{text}</h1>;
};

export default H1;
