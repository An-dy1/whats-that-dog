import Navigation from '../components/general/Navigation';
import Headline from '../components/general/Headline';

export default function Guess() {
  const title = 'Donate to the cause';
  const subhead = 'On this donation page';

  return (
    <div>
      <Headline title={title} subhead={subhead}></Headline>
      <Navigation />
    </div>
  );
}
