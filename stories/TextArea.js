import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TextArea from '../src/components/TextArea/TextArea';

storiesOf('TextArea', module)
  .add('with div below', () => (
    <div>
      <TextArea placeholder="Type a note..." />
      <div>Another thing</div>
    </div>
  ))
  .add('with error', () => (
    <div>
      <TextArea error placeholder="Type a note..." />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <TextArea disabled placeholder="Type a note..." />
    </div>
  ));