/**
 *
 * Asynchronously loads the component for PageAccueil
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
