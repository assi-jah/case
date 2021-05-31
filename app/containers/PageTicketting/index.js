/**
 *
 * PageTicketting
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPageTicketting from './selectors';
import reducer from './reducer';
import saga from './saga';

export function PageTicketting() {
  useInjectReducer({ key: 'pageTicketting', reducer });
  useInjectSaga({ key: 'pageTicketting', saga });

  return (
    <div>
      <Helmet>
        <title>PageTicketting</title>
        <meta name="description" content="Description of PageTicketting" />
      </Helmet>
    </div>
  );
}

PageTicketting.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pageTicketting: makeSelectPageTicketting(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PageTicketting);
