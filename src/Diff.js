import React, { PureComponent } from 'react';
import ReactDiffViewer from 'react-diff-viewer';

const oldCode = `
( 酒店新客首单==false)&&( string.contains(已使用券列表,'new')==true)
`;
const newCode = `
( 酒店新客首单==false)&&( string.contains(已使用券列表,'new')==false)
`;

class Diff extends PureComponent {
  render = () => {
    return (
      <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
    );
  };
}

export default Diff;