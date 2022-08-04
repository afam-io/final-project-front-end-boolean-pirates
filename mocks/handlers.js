import { rest } from 'msw';

import tutorialData from '../library/specificTutorialData';

export const handlers = [rest.get('/tutorailData')];
