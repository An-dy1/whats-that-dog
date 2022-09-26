import Headline from '../components/general/Headline';
import Navigation from '../components/general/Navigation';
import RsvpComponent from '../components/user/RsvpComponent';
import '../components/user/RsvpComponent.css';

export default function Rsvp() {
  const title = 'RSVP';
  const subhead = `Please let us know if you'll be able to join us`;

  return (
    <div>
      <Headline title={title} subhead={subhead}></Headline>
      <Navigation />
      <RsvpComponent />
    </div>
  );
}
