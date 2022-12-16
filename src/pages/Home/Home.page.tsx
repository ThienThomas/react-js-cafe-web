import Productions from './Production.component';
const style = {
  container: 'container px-10 m-auto py-5'
};
export const Home = () => {
  return (
    <div className={style.container}>
      {/* <Slider /> */}
      <Productions />
      {/* <MarketingContent /> */}
    </div>
  );
};
