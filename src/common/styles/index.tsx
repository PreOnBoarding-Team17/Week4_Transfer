import styled from 'styled-components';
import colors from 'styles/colors';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${colors.grey700};
`;

export const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
  font-weight: inherit;
  font-size: inherit;
`;

interface TableCellProps {
  textAlign?: string;
  receiver?: boolean;
}

export const TableCell = styled.th<TableCellProps>`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  border: 2px solid ${colors.grey200};
  padding: 16px;
  ${({ receiver }) => receiver && `max-width: 150px;`}
`;
