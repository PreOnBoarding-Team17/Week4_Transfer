import React from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import { TableCell, TableRow } from 'common/styles';
import { useDataState } from 'contextAPI';
import TableData from 'components/TableData';

const CELLTITLE = ['제목', '파일개수', '파일사이즈', '유효기간', '받은사람'];

const LinkPage: FC = () => {
  const datas = useDataState();

  return (
    <>
      <Title>마이 링크</Title>
      <Table>
        <TableHead>
          <TableRow>
            {CELLTITLE.map((text, index) => (
              <TableCell
                key={text + index}
                textAlign={index === 0 ? 'left' : 'center'}
              >
                {text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>{datas?.map((data) => TableData(data))}</TableBody>
      </Table>
    </>
  );
};

export default LinkPage;

const Title = styled.h2`
  color: ${colors.grey700};
  letter-spacing: -0.62px;
  word-break: keep-all;
  margin: 0;
`;

const Table = styled.table`
  margin-top: 24px;
  margin-bottom: 102px;
  width: 100%;
  display: table;
  position: relative;
  text-align: left;
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
  border-spacing: 0px;
  color: ${colors.grey600};
`;

const TableHead = styled.thead`
  font-weight: 600;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TableBody = styled.tbody`
  font-weight: 400;
  cursor: pointer;

  tr {
    @media (max-width: 768px) {
      float: left;
      width: calc(100% - 40px);
      position: relative;
      box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.07);
      margin-bottom: 30px;
      background-color: ${colors.white};
      border-radius: 4px;
      padding: 0px 20px 20px 20px;
    }
  }

  th {
    font-size: 14px;

    & > span:first-child {
      display: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      border-bottom: none;
      padding: 20px 0;
      border-top: 1px solid;
      border-color: ${colors.grey200};
      display: flex;
      justify-content: space-between;

      & > span:first-child {
        display: inline-block;
      }
      & > *:last-child {
        display: inline-block;
      }
      &:first-child {
        border-top: none;
      }
    }
  }
`;
