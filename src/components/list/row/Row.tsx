export const Row = (props: {
  leftHero: string;
  leftHeroInfo: string;
  rightHero: string;
  rightHeroDetails: string;
  headline: string;
  info: string;
  actions: Array<{
    name: string;
    onInvoke: () => void;
  }>;
}) => {
  console.log(props);
  return (
    <div className="flex flex-row">
      <div className="basis-1/4"></div>
      <div className="flex"></div>
      <div className="basis-1/4"></div>
    </div>
  );
};
