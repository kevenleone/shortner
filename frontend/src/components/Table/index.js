import React from 'react';
import PropTypes from 'prop-types';
import {
  Table as CustomTable,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
            
            { items.length === 0 && (
              <tr>
                <td align="center" colSpan={columns.length}>
                  No Items to show 
                </td>
              </tr>
            ) }
            
          { items.map(((item, index) => (
            <tr key={index}>
              { columns.map(({
                field, name, render, actions,
              }, i) => {
                let data = item[field];
                if (name === 'Actions') {
                  return (
                    <td key={i}>
                      <UncontrolledButtonDropdown className="dropmenu">
                        <DropdownToggle caret size="sm">
                          Options
                        </DropdownToggle>
                        <DropdownMenu>
                          { actions.map((action, id) => (
                            <DropdownItem
                              key={id}
                              onClick={() => action.onClick(item)}
                            >
                              {action.name}
                            </DropdownItem>
                          )) }
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </td>
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

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  items: [],
  columns: [],
};
