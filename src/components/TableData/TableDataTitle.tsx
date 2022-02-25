import React, { SyntheticEvent } from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import { CustomLink, TableCell } from 'common/styles';

interface TableDataTitleProps {
  id: string | undefined;
  thumbnailUrl: string;
  summary: string;
  expireState: boolean;
}

const EXPIRED = '유효기간 만료';

const TableDataTitle: FC<TableDataTitleProps> = ({
  id,
  thumbnailUrl,
  summary,
  expireState,
}) => {
  const copyUrl = `${window.location.href}${id}`;

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/svgs/default.svg';
  };

  const handleUrlCopy = (copyUrl: string) => {
    copyUrl !== EXPIRED &&
      navigator.clipboard &&
      navigator.clipboard.writeText(copyUrl).then(() => {
        alert(summary + ' 주소가 복사되었습니다.');
      });
  };

  return (
    <TableCell textAlign="left">
      <LinkInfo>
        <CustomLink
          to={{
            pathname: `/${id}`,
          }}
        >
          <LinkImage>
            <img
              referrerPolicy="no-referrer"
              src={thumbnailUrl}
              onError={handleImgError}
              alt="thumbnail"
            />
          </LinkImage>
        </CustomLink>

        <LinkTexts>
          <CustomLink
            to={{
              pathname: `/${id}`,
            }}
          >
            <LinkTitle>{summary}</LinkTitle>
          </CustomLink>

          <LinkUrl
            onClick={() => {
              expireState ? handleUrlCopy(EXPIRED) : handleUrlCopy(copyUrl);
            }}
            expired={expireState}
          >
            {expireState ? '만료됨' : copyUrl}
          </LinkUrl>
        </LinkTexts>
      </LinkInfo>
    </TableCell>
  );
};

export default TableDataTitle;

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    & + & {
      margin-left: 8px;
    }
  }
`;

const LinkImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  & > * {
    margin: 0;
  }
`;

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
  &:hover {
    color: ${colors.teal700};
  }
`;

interface LinkUrlProps {
  expired?: boolean;
}
const LinkUrl = styled.a<LinkUrlProps>`
  text-decoration: ${({ expired }) => (expired ? 'line-through' : 'underline')};
`;
