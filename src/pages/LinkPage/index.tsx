import React from "react";
import type { FC } from "react";
import Avatar from "components/Avatar";
import styled from "styled-components";
import colors from "styles/colors";

const LinkPage: FC = () => {
  return (
    <>
      <Title>마이 링크</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell>파일개수</TableCell>
            <TableCell>크기</TableCell>
            <TableCell>유효기간</TableCell>
            <TableCell>받은사람</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <LinkInfo>
                <LinkImage>
                  <img
                    referrerPolicy="no-referrer"
                    src="/svgs/default.svg"
                    alt=""
                  />
                </LinkImage>
                <LinkTexts>
                  <LinkTitle>로고파일</LinkTitle>
                  <LinkUrl>localhost/7LF4MDLY</LinkUrl>
                </LinkTexts>
              </LinkInfo>
              <span />
            </TableCell>
            <TableCell>
              <span>파일개수</span>
              <span>1</span>
            </TableCell>
            <TableCell>
              <span>파일사이즈</span>
              <span>10.86KB</span>
            </TableCell>
            <TableCell>
              <span>유효기간</span>
              <span>48시간 00분</span>
            </TableCell>
            <TableCell>
              <span>받은사람</span>
              <LinkReceivers>
                <Avatar text="recruit@estmob.com" />
              </LinkReceivers>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <LinkInfo>
                <LinkImage>
                  <img
                    referrerPolicy="no-referrer"
                    src="/svgs/default.svg"
                    alt=""
                  />
                </LinkImage>
                <LinkTexts>
                  <LinkTitle>로고파일</LinkTitle>
                  <LinkUrl>localhost/7LF4MDLY</LinkUrl>
                </LinkTexts>
              </LinkInfo>
              <span />
            </TableCell>
            <TableCell>
              <span>파일개수</span>
              <span>1</span>
            </TableCell>
            <TableCell>
              <span>파일사이즈</span>
              <span>10.86KB</span>
            </TableCell>
            <TableCell>
              <span>유효기간</span>
              <span>48시간 00분</span>
            </TableCell>
            <TableCell>
              <span>받은사람</span>
              <LinkReceivers>
                <Avatar text="recruit@estmob.com" />
              </LinkReceivers>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <LinkInfo>
                <LinkImage>
                  <img
                    referrerPolicy="no-referrer"
                    src="/svgs/default.svg"
                    alt=""
                  />
                </LinkImage>
                <LinkTexts>
                  <LinkTitle>로고파일</LinkTitle>
                  <LinkUrl>localhost/7LF4MDLY</LinkUrl>
                </LinkTexts>
              </LinkInfo>
              <span />
            </TableCell>
            <TableCell>
              <span>파일개수</span>
              <span>1</span>
            </TableCell>
            <TableCell>
              <span>파일사이즈</span>
              <span>10.86KB</span>
            </TableCell>
            <TableCell>
              <span>유효기간</span>
              <span>48시간 00분</span>
            </TableCell>
            <TableCell>
              <span>받은사람</span>
              <LinkReceivers>
                <Avatar text="recruit@estmob.com" />
              </LinkReceivers>
            </TableCell>
          </TableRow>
        </TableBody>
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

const TableCell = styled.th`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: left;
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
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;
