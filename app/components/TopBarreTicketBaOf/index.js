/**
 *
 * TopBarreTicketBaOf
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TopBarreTicketBaOf() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TopBarreTicketBaOf.propTypes = {};

export default TopBarreTicketBaOf;
