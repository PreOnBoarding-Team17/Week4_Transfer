import React, { useState, useEffect, useContext, SyntheticEvent } from 'react';
import type { FC } from 'react';
import Avatar from 'components/Avatar';
import Validity from 'components/Validity';
import styled from 'styled-components';
import { CustomLink, TableCell } from 'common/styles';

interface TableDataInfoProps {
  text: string;
  id: string | undefined;
  count?: number;
  fileSize?: string;
  expiresAt?: number;
  downloadCount?: number;
}

const TableDataInfo: FC<TableDataInfoProps> = ({
  text,
  id,
  count,
  fileSize,
  expiresAt,
  downloadCount,
}) => {
  const receiver = downloadCount ? true : false;
  return (
    <TableCell receiver>
      <span>{text}</span>
      <CustomLink
        to={{
          pathname: `/${id}`,
        }}
      >
        {count && <span>{count.toLocaleString('en')}</span>}
        {fileSize && <span>{fileSize}</span>}
        {expiresAt && <Validity date={expiresAt + 2730000} />}
        {downloadCount &&
          Array(downloadCount)
            .fill(0)
            .map((el, index) => (
              <LinkReceivers key={index + el}>
                <Avatar text={(index + 10).toString(32)} />
              </LinkReceivers>
            ))}
      </CustomLink>
    </TableCell>
  );
};

const LinkReceivers = styled.div`
  display: inline-flex;

  & > * + * {
    margin-left: 8px;
  }
`;

export default TableDataInfo;
