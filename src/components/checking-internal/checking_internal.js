import React from 'react'
import InputUrl from '../input-url'
import ExternalsTable from '../externals-table'
import AnothersTable from '../anothers-table'
import InternalsTable from '../internal-table'


function CheckingInternal(props) {
  return (
    <div>
      <InputUrl getLinks={props.getLinks} />
      <ExternalsTable/>
      <InternalsTable/>
      <AnothersTable/>
    </div>
  );
}

export default CheckingInternal;
