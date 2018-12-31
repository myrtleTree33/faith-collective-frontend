import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';

import ViewerItem from './ViewerItem';
import WideReadableDiv from '../../util/WideReadableDiv';

const Viewer = ({ items, history }) => {
  return (
    <WideReadableDiv>
      <List
        grid={{ gutter: 30, xs: 1, sm: 2, md: 3 }}
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <ViewerItem item={item} history={history} />
          </List.Item>
        )}
      />
    </WideReadableDiv>
  );
};

export default Viewer;
