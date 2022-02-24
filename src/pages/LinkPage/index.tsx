import React, { useState, useEffect, useContext } from "react";
import type { FC } from "react";
import Avatar from "components/Avatar";
import styled from "styled-components";
import colors from "styles/colors";
import fileSize from "filesize";
import { DataInterface } from "common/interface";
import { Link } from "react-router-dom";
import { useDataState } from "contextAPI";
import Validity from "components/Validity";

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

const EXPIRED = "유효기간 만료";

const TableData = (data: DataInterface) => {
  const copyUrl = `${window.location.href}${data.key}`;

  const handleImgError = (e: any) => {
    e.target.src = "/svgs/default.svg";
  };

  const handleUrlCopy = (text: string, copyUrl: string) => {
    text !== EXPIRED &&
      navigator.clipboard &&
      navigator.clipboard.writeText(copyUrl).then(() => {
        alert(data.summary + " 가 복사되었습니다.");
      });
  };

  return (
    <TableRow key={data.key}>
      <TableCell textAlign="left">
        <LinkInfo>
          <Link
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
          </Link>

          <LinkTexts>
            <Link
              to={{
                pathname: `/${data.key}`,
              }}
            >
              <LinkTitle>{data.summary}</LinkTitle>
            </Link>

            <LinkUrl
              onClick={() => {
                handleUrlCopy(data.summary, copyUrl);
              }}
            >
              {copyUrl}
            </LinkUrl>
          </LinkTexts>
        </LinkInfo>
        <span />
      </TableCell>
      <TableCell textAlign="center">
        <span>파일개수</span>
        <span>{data.count.toLocaleString("en")}</span>
      </TableCell>
      <TableCell>
        <span>파일사이즈</span>
        <span>
          {fileSize(data.files.reduce((acc, cur) => acc + cur.size, 0))}
        </span>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        {/* <span>{data.expires_at}</span> */}
        <Validity date={data.expires_at} />
      </TableCell>
      <TableCell>
        <span>받은사람</span>
        {data.sent?.emails.map((email) => (
          <LinkReceivers key={email}>
            <Avatar text={email} />
          </LinkReceivers>
        ))}
      </TableCell>
    </TableRow>
  );
};

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
}
const TableCell = styled.th<TableCellProps>`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: ${(props) => props.textAlign || "center"};
  border: 2px solid ${colors.grey200};
  padding: 16px;
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
`;

const LinkUrl = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.teal700};
  }
`;

const LinkReceivers = styled.div`
  display: inline-flex;

  & > * + * {
    margin-left: 8px;
  }
`;
