import React from 'react';
import {
  Table as CustomTable, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import './Table.scss';

export default function Table({ items, columns = [] }) {
  return (
    <div className="TableArea">
      <CustomTable striped hover responsive>
        <thead>
          <tr>
            { columns.map(({ name, field }, index) => (
              <th key={index}>{name || field}</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { items.map(((item, index) => (
            <tr key={index}>
              { columns.map(({
                field, name, render, actions,
              }, i) => {
                let data = item[field];
                if (name === 'Actions') {
                  return (
                    <UncontrolledButtonDropdown className="dropmenu">
                      <DropdownToggle caret size="sm">
                        Options
                      </DropdownToggle>
                      <DropdownMenu>
                        { actions.map((action) => (
                          <DropdownItem
                            key={action.name}
                            onClick={() => action.onClick(item)}
                          >
                            {action.name}

                          </DropdownItem>
                        )) }
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  );
                }
                if (render && render(data, item)) {
                  data = render(data, item);
                }
                return (
                  <td key={i}>{data}</td>
                );
              }) }
            </tr>
          ))) }
        </tbody>
      </CustomTable>
    </div>
  );
}
