import React, { useState, useEffect, useContext, SyntheticEvent } from 'react';
import type { FC } from 'react';
import Avatar from 'components/Avatar';
import styled from 'styled-components';
import colors from 'styles/colors';
import fileSize from 'filesize';
import { DataInterface } from 'common/interface';
import { Link } from 'react-router-dom';
import { useDataState } from 'contextAPI';
import Validity from 'components/Validity';

const LinkPage: FC = () => {
  const datas = useDataState();

  return (
    <>
      <Title>마이 링크</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell textAlign="left">제목</TableCell>
            <TableCell>파일개수</TableCell>
            <TableCell>크기</TableCell>
            <TableCell>유효기간</TableCell>
            <TableCell>받은사람</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{datas?.map((data) => TableData(data))}</TableBody>
      </Table>
    </>
  );
};

export default LinkPage;

const EXPIRED = '유효기간 만료';

const TableData = (data: DataInterface) => {
  const copyUrl = `${window.location.href}${data.key}`;
  const expireState =
    (data.expires_at + 2700000) * 1000 - new Date().getTime() > 0
      ? false
      : true;

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/svgs/default.svg';
  };

  const handleUrlCopy = (copyUrl: string) => {
    copyUrl !== EXPIRED &&
      navigator.clipboard &&
      navigator.clipboard.writeText(copyUrl).then(() => {
        alert(data.summary + ' 주소가 복사되었습니다.');
      });
  };

  return (
    <TableRow key={data.key}>
      <TableCell textAlign="left">
        <LinkInfo>
          <CustomLink
            to={{
              pathname: `/${data.key}`,
            }}
          >
            <LinkImage>
              <img
                referrerPolicy="no-referrer"
                src={data.thumbnailUrl}
                onError={handleImgError}
                alt="thumbnail"
              />
            </LinkImage>
          </CustomLink>

          <LinkTexts>
            <CustomLink
              to={{
                pathname: `/${data.key}`,
              }}
            >
              <LinkTitle>{data.summary}</LinkTitle>
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
        <span />
      </TableCell>

      <TableCell textAlign="center">
        <span>파일개수</span>
        <CustomLink
          to={{
            pathname: `/${data.key}`,
          }}
        >
          <span>{data.count.toLocaleString('en')}</span>
        </CustomLink>
      </TableCell>
      <TableCell>
        <span>파일사이즈</span>
        <CustomLink
          to={{
            pathname: `/${data.key}`,
          }}
        >
          <span>{fileSize(data.size)}</span>
        </CustomLink>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        <CustomLink
          to={{
            pathname: `/${data.key}`,
          }}
        >
          {/* <span>{data.expires_at}</span> */}
          <Validity date={data.expires_at + 2700000} />
        </CustomLink>
      </TableCell>
      <TableCell receiver>
        <span>받은사람</span>
        <CustomLink
          to={{
            pathname: `/${data.key}`,
          }}
        >
          {new Array(data.download_count).fill(0).map((el, index) => (
            <LinkReceivers key={index + el}>
              <Avatar text={(index + 10).toString(32)} />
            </LinkReceivers>
          ))}
        </CustomLink>
      </TableCell>
    </TableRow>
  );
};

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${colors.grey700};
`;

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

const TableRow = styled.tr`
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
const TableCell = styled.th<TableCellProps>`
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

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
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

const LinkReceivers = styled.div`
  display: inline-flex;

  & > * + * {
    margin-left: 8px;
  }
`;
