import { postToHaste } from '@imnaiyar/utils';

// @ts-expect-error
(async () => {
  const log = await postToHaste('test');
  console.log(log);
});