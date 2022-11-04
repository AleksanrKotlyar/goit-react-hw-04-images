import { Message } from './Notifications.styled';

export const Idle = () => <Message>Enter data to request... </Message>;

export const Rejected = () => (
  <Message>
    Sorry something went wrong, reload the page and try again...
  </Message>
);

export const ResolvedNoData = ({ query }) => (
  <Message>
    Sorry, no data was found for your request "<i>{query}</i>"
  </Message>
);
