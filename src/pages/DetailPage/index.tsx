import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import Button from 'components/Button';
import { useParams } from 'react-router-dom';
import { useDataState } from 'contextAPI';
import { DataInterface } from 'common/interface';
import fileSize from 'filesize';
import useExpired from 'hooks/useExpired';

const DetailPage: FC = () => {
  const { key } = useParams();
  const datas = useDataState();

  const [data, setData] = useState<DataInterface | null>(null);
  const expireState = useExpired(data);

  useEffect(() => {
    setData(datas.filter((data) => data.key === key)[0]);
  }, []);

  const handleDate = (element: number) => {
    const date = data && new Date(element * 1000);
    const year = date?.getFullYear();
    const month = date && date.getMonth() + 1;
    const day = date?.getDay();
    const hour = date?.getHours();
    const minute = date?.getMinutes();
    return `${year}년 ${month}월 ${day}일 ${hour}:${minute} +09:00`;
  };

  const handleTotalFileSize = () => {
    let allFileSize = 0;
    data &&
      data.files.map((element) => {
        allFileSize += element.size;
      });
    return fileSize(allFileSize);
  };

  const handleDownload = () => {
    if (expireState) alert('만료된 파일입니다.');
    else alert('다운로드 되었습니다.');
  };
  return (
    <>
      {data && (
        <>
          <Header>
            <LinkInfo>
              <Title>
                {data.sent?.subject.length ? data.sent?.subject : '제목없음'}
              </Title>
              <Url>{data.thumbnailUrl}</Url>
            </LinkInfo>
            <DownloadButton onClick={handleDownload}>
              <img
                referrerPolicy="no-referrer"
                src="/svgs/download.svg"
                alt=""
              />
              받기
            </DownloadButton>
          </Header>
          <Article>
            <Descrition>
              <Texts>
                <Top>링크 생성일</Top>
                <Bottom>{data && handleDate(data.created_at)}</Bottom>
                <Top>메세지</Top>
                <Bottom>{data.sent?.content}</Bottom>
                <Top>다운로드 횟수</Top>
                <Bottom>{data.download_count}</Bottom>
              </Texts>
              <LinkImage>
                <Image image={data.thumbnailUrl} />
              </LinkImage>
            </Descrition>
            <ListSummary>
              <div>총 {expireState ? 0 : data.files.length}개의 파일</div>
              <div>{expireState ? '' : handleTotalFileSize()}</div>
            </ListSummary>
            <FileList>
              {data && !expireState ? (
                data.files.map((element, index) => (
                  <FileListItem key={index}>
                    <FileItemInfo>
                      <span />
                      <span>{element.name}</span>
                    </FileItemInfo>
                    <FileItemSize>{fileSize(element.size)}</FileItemSize>
                  </FileListItem>
                ))
              ) : (
                <></>
              )}
            </FileList>
          </Article>
        </>
      )}
    </>
  );
};

const Header = styled.header`
  display: flex;
  color: ${colors.grey600};
  margin-bottom: 32px;
`;

const LinkInfo = styled.div`
  overflow: hidden;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  color: ${colors.grey700};
  font-size: 20px;
`;

const Url = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: underline;
  line-height: 20px;
  font-size: 14px;

  :hover {
    color: ${colors.teal700};
  }
`;

const DownloadButton = styled(Button)`
  font-size: 16px;
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;

const Article = styled.article`
  border-radius: 4px;
  border-color: ${colors.grey200};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0 0 1px rgb(0 20 61 / 8%), 0 3px 3px 0 rgb(0 20 61 / 4%);
  background-color: ${colors.white};
  color: ${colors.grey600};
  font-size: 14px;
  font-weight: 400;
`;

const Descrition = styled.div`
  display: flex;
  padding: 36px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }
`;

const Texts = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Top = styled.label`
  font-weight: 600;
  line-height: 20px;
`;

const Bottom = styled.p`
  color: ${colors.grey700};
  margin: 8px 0 24px;
`;

const LinkImage = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background-color: ${colors.grey50};

  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

const Image = styled.span<{ image: string }>`
  width: 120px;
  display: inline-block;
  background-image: ${(props) =>
    props.image.slice(-3) !== 'svg'
      ? `url(${props.image})`
      : 'url(/svgs/default.svg)'};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 100%;
`;

const ListSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;
  font-weight: 600;
  border-top: 1px solid;
  border-color: ${colors.grey200};

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

const FileList = styled.ul`
  border-top: 1px solid;
  border-color: ${colors.grey200};
  padding: 0;
  margin: 0;
  padding: 0 36px;
  color: ${colors.grey700};

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & > li + li {
    border-top: 1px solid;
    border-color: ${colors.grey200};
  }
`;

const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileItemInfo = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  align-items: center;

  span:first-child {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    display: inline-block;
    background-image: url(/svgs/default.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const FileItemSize = styled.div``;

export default DetailPage;
