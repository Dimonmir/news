import { render } from '@testing-library/react';
import { VirtualizedList } from './index';

test('VirtualizedList snapshot', () => {
  const { asFragment } = render(
    <VirtualizedList
      data={[
        {
          API: 'AdoptAPet',
          Description: 'Resource to help get pets adopted',
          Auth: 'apiKey',
          HTTPS: true,
          Cors: 'yes',
          Link: 'https://www.adoptapet.com/public/apis/pet_list.html',
          Category: 'Animals',
          Img: 'background1.jpg',
        },
        {
          API: 'Axolotl',
          Description: 'Collection of axolotl pictures and facts',
          Auth: '',
          HTTPS: true,
          Cors: 'no',
          Link: 'https://theaxolotlapi.netlify.app/',
          Category: 'Animals',
          Img: 'background2.jpg',
        },
      ]}
      onDelete={() => {}}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
